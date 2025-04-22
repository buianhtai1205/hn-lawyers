import { Component, ElementRef, Input, OnInit, OnDestroy, ViewChild, NgZone, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BubbleParticle } from '@shared/models/bubble-particle.model';

@Component({
    selector: 'app-bubble-cursor',
    templateUrl: './bubble-cursor.component.html',
    styleUrl: './bubble-cursor.component.scss',
    standalone: true,
})
export class BubbleCursorComponent implements OnInit, OnDestroy {
    @Input() wrapperElement?: HTMLElement;
    @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

    private context: CanvasRenderingContext2D | null = null;
    private particles: BubbleParticle[] = [];
    private cursor = { x: 0, y: 0 };
    private animationFrameId: number | null = null;
    private width = 0;
    private height = 0;
    private isBrowser: boolean;

    constructor(
        private ngZone: NgZone,
        @Inject(PLATFORM_ID) platformId: Object
    ) {
        this.isBrowser = isPlatformBrowser(platformId);
    }

    ngOnInit() {
        if (this.isBrowser) {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.init();
        }
    }

    private init() {
        if (!this.isBrowser) return;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

        if (prefersReducedMotion.matches) {
            console.log('This browser has prefers reduced motion turned on, so the cursor did not init');
            return;
        }

        const canvas = this.canvasRef.nativeElement;
        this.context = canvas.getContext('2d');

        if (!this.context) return;

        if (this.wrapperElement) {
            canvas.style.position = 'absolute';
            this.wrapperElement.appendChild(canvas);
            canvas.width = this.wrapperElement.clientWidth;
            canvas.height = this.wrapperElement.clientHeight;
        } else {
            canvas.width = this.width;
            canvas.height = this.height;
        }

        this.bindEvents();
        this.startAnimation();
    }

    private bindEvents() {
        if (!this.isBrowser) return;

        const element = this.wrapperElement || document.body;
        element.addEventListener('mousemove', this.onMouseMove.bind(this));
        element.addEventListener('touchmove', this.onTouchMove.bind(this));
        element.addEventListener('touchstart', this.onTouchMove.bind(this));
        window.addEventListener('resize', this.onWindowResize.bind(this));
    }

    private onWindowResize() {
        if (!this.isBrowser) return;

        this.width = window.innerWidth;
        this.height = window.innerHeight;

        const canvas = this.canvasRef.nativeElement;
        if (this.wrapperElement) {
            canvas.width = this.wrapperElement.clientWidth;
            canvas.height = this.wrapperElement.clientHeight;
        } else {
            canvas.width = this.width;
            canvas.height = this.height;
        }
    }

    private onTouchMove(e: TouchEvent) {
        if (!this.isBrowser) return;

        if (e.touches.length > 0) {
            for (let i = 0; i < e.touches.length; i++) {
                this.addParticle(e.touches[i].clientX, e.touches[i].clientY);
            }
        }
    }

    private onMouseMove(e: MouseEvent) {
        if (!this.isBrowser) return;

        if (this.wrapperElement) {
            const boundingRect = this.wrapperElement.getBoundingClientRect();
            this.cursor.x = e.clientX - boundingRect.left;
            this.cursor.y = e.clientY - boundingRect.top;
        } else {
            this.cursor.x = e.clientX;
            this.cursor.y = e.clientY;
        }

        this.addParticle(this.cursor.x, this.cursor.y);
    }

    private addParticle(x: number, y: number) {
        this.particles.push(new BubbleParticle(x, y));
    }

    private updateParticles() {
        if (!this.context || !this.canvasRef || !this.isBrowser) return;

        const canvas = this.canvasRef.nativeElement;
        this.context.clearRect(0, 0, canvas.width, canvas.height);

        // Update
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].update(this.context);
        }

        // Remove dead particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
            if (this.particles[i].lifeSpan < 0) {
                this.particles.splice(i, 1);
            }
        }
    }

    private startAnimation() {
        if (!this.isBrowser) return;

        this.ngZone.runOutsideAngular(() => {
            const animate = () => {
                this.updateParticles();
                this.animationFrameId = requestAnimationFrame(animate);
            };
            animate();
        });
    }

    ngOnDestroy() {
        if (!this.isBrowser) return;

        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }

        const element = this.wrapperElement || document.body;
        element.removeEventListener('mousemove', this.onMouseMove);
        element.removeEventListener('touchmove', this.onTouchMove);
        element.removeEventListener('touchstart', this.onTouchMove);
        window.removeEventListener('resize', this.onWindowResize);
    }
}
