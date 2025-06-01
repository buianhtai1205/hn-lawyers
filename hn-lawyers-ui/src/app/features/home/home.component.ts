import { Component } from '@angular/core';

import { SliderComponent } from './components/slider/slider.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [SliderComponent, HeaderComponent, AboutSectionComponent, ServicesSectionComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {}
