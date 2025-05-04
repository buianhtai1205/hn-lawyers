import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SliderComponent } from './components/slider/slider.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { TextAnimationDirective } from '@shared/directives/text-animation.directive';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, SliderComponent, HeaderComponent, TextAnimationDirective],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {}
