import { Component, OnInit, Input, HostListener, ElementRef, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-header',
    imports: [CommonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
    @Input() isFixed: boolean = false;
    private headerPosition: number;
    private isBrowser: boolean;

    constructor(
        private elementRef: ElementRef,
        @Inject(PLATFORM_ID) private platformId: Object
    ) {
        this.headerPosition = 0;
        this.isBrowser = isPlatformBrowser(this.platformId);
    }

    ngOnInit(): void {
        if (this.isBrowser) {
            // Lấy vị trí ban đầu của header sau khi view đã được khởi tạo
            setTimeout(() => {
                this.headerPosition = this.elementRef.nativeElement.getBoundingClientRect().top + window.pageYOffset;
            });
        }
    }

    @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
        if (this.isBrowser) {
            const scrollPosition =
                window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            this.isFixed = scrollPosition >= this.headerPosition;
        }
    }
}
