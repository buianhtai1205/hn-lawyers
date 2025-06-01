import { Component } from '@angular/core';

import { SliderComponent } from './components/slider/slider.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { TestimonialsSectionComponent } from './components/testimonials-section/testimonials-section.component';
import { LegalNewsSectionComponent } from './components/legal-news-section/legal-news-section.component';
import { PodcastSectionComponent } from './components/podcast-section/podcast-section.component';
import { PodcastEpisodesSectionComponent } from './components/podcast-episodes-section/podcast-episodes-section.component';
import { ConsultationFormSectionComponent } from './components/consultation-form-section/consultation-form-section.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        SliderComponent,
        HeaderComponent,
        FooterComponent,
        AboutSectionComponent,
        ServicesSectionComponent,
        TestimonialsSectionComponent,
        LegalNewsSectionComponent,
        PodcastSectionComponent,
        PodcastEpisodesSectionComponent,
        ConsultationFormSectionComponent,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {}
