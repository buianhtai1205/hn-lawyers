import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-testimonials-section',
    imports: [CommonModule],
    templateUrl: './testimonials-section.component.html',
    styleUrl: './testimonials-section.component.scss',
})
export class TestimonialsSectionComponent implements OnInit, OnDestroy {
    customerLogos = [
        { name: 'BCONS', url: 'https://www.blawyersvn.com/wp-content/uploads/2020/07/kingsun-logo.jpg' },
        { name: 'CTCI', url: 'https://www.blawyersvn.com/wp-content/uploads/2022/08/TWPC.png' },
        { name: 'Sika', url: 'https://www.blawyersvn.com/wp-content/uploads/2020/07/cjfreshway-logo.jpg' },
        { name: 'VIETAVIS', url: 'https://www.blawyersvn.com/wp-content/uploads/2020/07/CTCI-logo.jpg' },
        { name: 'BERYL8', url: 'https://www.blawyersvn.com/wp-content/uploads/2022/08/Viet-Avis-1.jpg' },
        { name: 'BCONS', url: 'https://www.blawyersvn.com/wp-content/uploads/2020/07/Logo-BCons.png' },
    ];
    currentLogoIndex = 0;
    sliderInterval: any;

    ngOnInit() {
        this.startAutoSlide();
    }

    startAutoSlide() {
        this.nextLogo();
    }

    nextLogo() {
        this.currentLogoIndex = (this.currentLogoIndex + 1) % this.customerLogos.length;
    }

    prevLogo() {
        this.currentLogoIndex = (this.currentLogoIndex - 1 + this.customerLogos.length) % this.customerLogos.length;
    }

    ngOnDestroy() {
        if (this.sliderInterval) {
            clearInterval(this.sliderInterval);
        }
    }
}
