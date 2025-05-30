import { Component, ElementRef, Input, OnInit, OnDestroy, ViewChild, NgZone, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CharacterParticle } from '@shared/models/character-particle.model';

@Component({
    selector: 'app-character-cursor',
    templateUrl: './character-cursor.component.html',
    styleUrl: './character-cursor.component.scss',
    standalone: true,
})
export class CharacterCursorComponent implements OnInit, OnDestroy {
    @Input() characters: string[] = ['h', 'n', 'l', 'a', 'w'];
    @Input() colors: string[] = ['#6622CC', '#A755C2', '#B07C9E', '#B59194', '#D2A1B8'];
    @Input() cursorOffset: { x: number; y: number } = { x: 0, y: 0 };
    @Input() font: string = '15px serif';
    @Input() wrapperElement?: HTMLElement;
    @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

    private context: CanvasRenderingContext2D | null = null;
    private particles: CharacterParticle[] = [];
    private cursor = { x: 0, y: 0 };
    private animationFrameId: number | null = null;
    private canvImages: HTMLCanvasElement[] = [];
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
            canvas.style.position = 'fixed';
            document.body.appendChild(canvas);
            canvas.width = this.width;
            canvas.height = this.height;
        }

        this.context.font = this.font;
        this.context.textBaseline = 'middle';
        this.context.textAlign = 'center';

        this.characters.forEach(char => {
            const measurements = this.context!.measureText(char);
            const bgCanvas = document.createElement('canvas');
            const bgContext = bgCanvas.getContext('2d');

            if (bgContext) {
                bgCanvas.width = measurements.width;
                bgCanvas.height = measurements.actualBoundingBoxAscent * 2.5;

                bgContext.textAlign = 'center';
                bgContext.font = this.font;
                bgContext.textBaseline = 'middle';
                const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
                bgContext.fillStyle = randomColor;

                bgContext.fillText(char, bgCanvas.width / 2, measurements.actualBoundingBoxAscent);

                this.canvImages.push(bgCanvas);
            }
        });

        this.bindEvents();
        this.startAnimation();
    }

    private randomPositiveOrNegativeOne(): number {
        return Math.random() < 0.5 ? -1 : 1;
    }

    private characterLifeSpanFunction(): number {
        return Math.floor(Math.random() * 60 + 80);
    }

    private initialCharacterVelocityFunction(): { x: number; y: number } {
        return {
            x: (Math.random() < 0.5 ? -1 : 1) * Math.random() * 5,
            y: (Math.random() < 0.5 ? -1 : 1) * Math.random() * 5,
        };
    }

    private characterVelocityChangeX(age: number, lifeSpan: number): number {
        return (Math.random() < 0.5 ? -1 : 1) / 30;
    }

    private characterVelocityChangeY(age: number, lifeSpan: number): number {
        return (Math.random() < 0.5 ? -1 : 1) / 15;
    }

    private characterScalingFunction(age: number, lifeSpan: number): number {
        return Math.max(((lifeSpan - age) / lifeSpan) * 2, 0);
    }

    private characterNewRotationDegreesFunction(age: number, lifeSpan: number): number {
        return (lifeSpan - age) / 5;
    }

    private createParticle(x: number, y: number, canvasItem: HTMLCanvasElement): CharacterParticle {
        const lifeSpan = this.characterLifeSpanFunction();
        return {
            rotationSign: this.randomPositiveOrNegativeOne(),
            age: 0,
            initialLifeSpan: lifeSpan,
            lifeSpan: lifeSpan,
            velocity: this.initialCharacterVelocityFunction(),
            position: {
                x: x + this.cursorOffset.x,
                y: y + this.cursorOffset.y,
            },
            canv: canvasItem,
            update: function (context: CanvasRenderingContext2D) {
                this.position.x += this.velocity.x;
                this.position.y += this.velocity.y;
                this.lifeSpan--;
                this.age++;

                this.velocity.x += (Math.random() < 0.5 ? -1 : 1) / 30;
                this.velocity.y += (Math.random() < 0.5 ? -1 : 1) / 15;

                const scale = Math.max(((this.initialLifeSpan - this.age) / this.initialLifeSpan) * 2, 0);
                const degrees = this.rotationSign * ((this.initialLifeSpan - this.age) / 5);
                const radians = degrees * 0.0174533;

                context.translate(this.position.x, this.position.y);
                context.rotate(radians);

                context.drawImage(
                    this.canv,
                    (-this.canv.width / 2) * scale,
                    -this.canv.height / 2,
                    this.canv.width * scale,
                    this.canv.height * scale
                );

                context.rotate(-radians);
                context.translate(-this.position.x, -this.position.y);
            },
        };
    }

    private bindEvents() {
        if (!this.isBrowser) return;

        const element = this.wrapperElement || document.body;
        element.addEventListener('mousemove', this.onMouseMove.bind(this));
        element.addEventListener('touchmove', this.onTouchMove.bind(this));
        element.addEventListener('touchstart', this.onTouchMove.bind(this));
        window.addEventListener('resize', this.onWindowResize.bind(this));
    }

    private onWindowResize = () => {
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
    };

    private onTouchMove = (e: TouchEvent) => {
        if (!this.isBrowser) return;

        if (e.touches.length > 0) {
            for (let i = 0; i < e.touches.length; i++) {
                this.addParticle(
                    e.touches[i].clientX,
                    e.touches[i].clientY,
                    this.canvImages[Math.floor(Math.random() * this.canvImages.length)]
                );
            }
        }
    };

    private onMouseMove = (e: MouseEvent) => {
        if (!this.isBrowser) return;

        if (this.wrapperElement) {
            const boundingRect = this.wrapperElement.getBoundingClientRect();
            this.cursor.x = e.clientX - boundingRect.left;
            this.cursor.y = e.clientY - boundingRect.top;
        } else {
            this.cursor.x = e.clientX;
            this.cursor.y = e.clientY;
        }

        this.addParticle(
            this.cursor.x,
            this.cursor.y,
            this.canvImages[Math.floor(Math.random() * this.characters.length)]
        );
    };

    private addParticle(x: number, y: number, img: HTMLCanvasElement) {
        this.particles.push(this.createParticle(x, y, img));
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

        if (this.particles.length === 0) {
            this.context.clearRect(0, 0, canvas.width, canvas.height);
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
