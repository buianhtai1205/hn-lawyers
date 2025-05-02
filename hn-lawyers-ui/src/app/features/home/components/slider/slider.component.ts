import {
    Component,
    OnInit,
    OnDestroy,
    ChangeDetectorRef,
    NgZone,
    ApplicationRef,
    ViewChild,
    ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, interval, takeUntil } from 'rxjs';
import { CharacterCursorComponent } from '@shared/components/character-cursor/character-cursor.component';

@Component({
    selector: 'app-slider',
    standalone: true,
    imports: [CommonModule, CharacterCursorComponent],
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit, OnDestroy {
    @ViewChild('sliderContainer') sliderContainer!: ElementRef;

    slideList: string[] = [
        'https://www.blawyersvn.com/wp-content/uploads/2020/07/Cove_BLawyer-01.jpg',
        'https://www.blawyersvn.com/wp-content/uploads/2020/07/BLawyers-Banner-02-1024x618.jpg',
        'https://www.blawyersvn.com/wp-content/uploads/2020/07/BLawyers-Banner-01.jpg',
        'https://www.blawyersvn.com/wp-content/uploads/2020/07/BLawyers-Banner-03.jpg',
    ];

    currentSlideIndex = 0;
    private destroy$ = new Subject<void>();
    private isAnimating = false;
    isInitialized = false;

    constructor(
        private cdr: ChangeDetectorRef,
        private ngZone: NgZone,
        private appRef: ApplicationRef
    ) {}

    ngOnInit() {
        // Trigger initial animation
        setTimeout(() => {
            this.isInitialized = true;
            this.cdr.detectChanges();
        }, 100);

        // Run the interval outside Angular's zone to avoid triggering unnecessary change detection
        this.ngZone.runOutsideAngular(() => {
            interval(5000)
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => {
                    if (!this.isAnimating) {
                        this.nextSlide();
                    }
                });
        });
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    nextSlide() {
        if (this.isAnimating) return;

        this.isAnimating = true;
        this.ngZone.run(() => {
            this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slideList.length;
            this.cdr.detectChanges();

            // Reset animation flag after transition
            setTimeout(() => {
                this.isAnimating = false;
            }, 500); // Match this with your CSS transition duration
        });
    }

    prevSlide() {
        if (this.isAnimating) return;

        this.isAnimating = true;
        this.ngZone.run(() => {
            this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slideList.length) % this.slideList.length;
            this.cdr.detectChanges();

            setTimeout(() => {
                this.isAnimating = false;
            }, 500);
        });
    }

    goToSlide(index: number) {
        if (this.isAnimating || this.currentSlideIndex === index) return;

        this.isAnimating = true;
        this.ngZone.run(() => {
            this.currentSlideIndex = index;
            this.cdr.detectChanges();

            setTimeout(() => {
                this.isAnimating = false;
            }, 500);
        });
    }

    trackByFn(index: number): number {
        return index;
    }
}
