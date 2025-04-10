import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-slider',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterViewInit {
    activeSlide: number = 0;
    slides: number = 4; // Total number of slides

    constructor() { }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
        // Auto-rotate slides every 5 seconds
        setInterval(() => {
            this.nextSlide();
        }, 5000);
    }

    nextSlide() {
        this.activeSlide = (this.activeSlide + 1) % this.slides;
        this.updateSlides();
    }

    prevSlide() {
        this.activeSlide = (this.activeSlide - 1 + this.slides) % this.slides;
        this.updateSlides();
    }

    setSlide(index: number) {
        this.activeSlide = index;
        this.updateSlides();
    }

    updateSlides() {
        // In a real implementation, we would update the DOM to show the active slide
        // Since we're just creating one static slide for the demo, we won't implement this fully
    }
}