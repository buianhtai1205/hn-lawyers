import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';

@Directive({
    selector: '[appTextAnimation]',
    standalone: true,
})
export class TextAnimationDirective implements AfterViewInit, OnDestroy {
    @Input() animationDelay: number = 50;
    @Input() colorChangeDelay: number = 500;

    private originalText: string = '';
    private animationTimeout: any;
    private observer: IntersectionObserver | null = null;
    private hasAnimated: boolean = false;

    constructor(private el: ElementRef) {}

    /**
     * Sau khi Angular đã thực hiện xong việc render UI,
     * hàm này sẽ được gọi để thực hiện animation.
     *
     * Đầu tiên, hàm này sẽ lưu lại nội dung gốc của element.
     * Sau đó, hàm này sẽ tạo ra một element con (wrapper) để chứa các ký tự,
     * và sau đó sẽ tạo ra các span để chứa từng ký tự.
     *
     * Tiếp theo, hàm này sẽ dùng IntersectionObserver để theo dõi xem element
     * có nằm trong viewport hay không. Nếu có, hàm này sẽ gọi hàm startAnimation
     * để thực hiện animation.
     */
    ngAfterViewInit() {
        this.originalText = this.el.nativeElement.textContent.trim();
        this.el.nativeElement.textContent = '';

        const wrapper = document.createElement('div');
        wrapper.style.display = 'inline-block';
        wrapper.style.letterSpacing = '2px';
        wrapper.style.visibility = 'hidden';
        this.el.nativeElement.appendChild(wrapper);

        // Tạo trước tất cả các span với vị trí cố định
        const characters = [...this.originalText];
        const spans = characters.map(char => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.display = 'inline-block';
            span.style.opacity = '0';
            span.style.color = '#1a3a6d';
            span.style.transition = 'opacity 0.4s ease';
            wrapper.appendChild(span);
            return span;
        });

        // Đợi một frame để DOM được cập nhật và layout được tính toán
        requestAnimationFrame(() => {
            wrapper.style.visibility = 'visible';
            this.observer = new IntersectionObserver(
                entries => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting && !this.hasAnimated) {
                            this.startAnimation(spans);
                            this.hasAnimated = true;
                            this.observer?.disconnect();
                        }
                    });
                },
                {
                    threshold: 0.5,
                }
            );

            this.observer.observe(this.el.nativeElement);
        });
    }

    /**
     * Thực hiện animation trên các span.
     *
     * Đầu tiên, hàm này sẽ hiện từng chữ một.
     * Sau đó, hàm này sẽ đợi một khoảng thời gian (this.colorChangeDelay),
     * rồi bắt đầu animation đổi màu.
     *
     * @param spans Mảng các span chứa các ký tự.
     */
    private async startAnimation(spans: HTMLSpanElement[]) {
        // Animation hiện từng chữ
        for (let i = 0; i < spans.length; i++) {
            await new Promise<void>(resolve => {
                setTimeout(() => {
                    spans[i].style.opacity = '1';
                    resolve();
                }, this.animationDelay);
            });
        }

        // Đợi rồi bắt đầu animation đổi màu
        await new Promise(resolve => setTimeout(resolve, this.colorChangeDelay));

        // Animation đổi màu
        for (let i = 0; i < spans.length; i++) {
            await new Promise<void>(resolve => {
                setTimeout(() => {
                    spans[i].style.color = '#f26522';
                    spans[i].style.transition = 'color 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
                    resolve();
                }, 30);
            });
        }
    }

    /**
     * Cleans up resources when the directive is destroyed.
     *
     * This method clears any pending animation timeouts and disconnects
     * the IntersectionObserver to prevent memory leaks.
     */

    ngOnDestroy() {
        if (this.animationTimeout) {
            clearTimeout(this.animationTimeout);
        }
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}
