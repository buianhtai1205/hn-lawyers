import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SliderComponent } from './components/slider/slider.component';
import { HeaderComponent } from '../../layout/header/header.component';

@Component({
    selector: 'app-home',
    imports: [CommonModule, SliderComponent, HeaderComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {}
