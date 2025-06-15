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
        { name: 'Top2_Logo', url: 'assets/images/testimonials-section/Top2_Logo.png' },
        { name: 'ACCV', url: 'assets/images/testimonials-section/ACCV.png' },
        { name: 'container', url: 'assets/images/testimonials-section/ECS-container.png' },
        { name: 'Capital', url: 'assets/images/testimonials-section/AP-Capital.png' },
        { name: 'Rockwills', url: 'assets/images/testimonials-section/Rockwills.png' },
        { name: 'logo', url: 'assets/images/testimonials-section/kingsun-logo.jpg' },
        { name: 'TWPC', url: 'assets/images/testimonials-section/TWPC.png' },
        { name: 'logo', url: 'assets/images/testimonials-section/cjfreshway-logo.jpg' },
        { name: 'BCons', url: 'assets/images/testimonials-section/Logo-BCons.png' },
        { name: 'logo', url: 'assets/images/testimonials-section/CTCI-logo.jpg' },
        { name: 'VN', url: 'assets/images/testimonials-section/Beryl-8-VN.png' },
        { name: 'firm', url: 'assets/images/testimonials-section/Longan-Law-firm.png' },
        { name: 'JSC', url: 'assets/images/testimonials-section/Viet-Hai-Communication-JSC.png' },
        { name: 'AAsset_Logo', url: 'assets/images/testimonials-section/AAsset_Logo.jpg' },
        { name: 'logo', url: 'assets/images/testimonials-section/BEN-logo.png' },
        { name: 'logo', url: 'assets/images/testimonials-section/Cuscapi-Berhad-logo.jpg' },
        { name: 'Logo', url: 'assets/images/testimonials-section/DragonFly-Logo.jpg' },
        { name: 'qizo-logo-1', url: 'assets/images/testimonials-section/qizo-logo-1.jpg' },
        { name: 'Formwork', url: 'assets/images/testimonials-section/Great-Formwork.png' },
        { name: 'Deep-and-Far-1', url: 'assets/images/testimonials-section/Deep-and-Far-1.jpg' },
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
