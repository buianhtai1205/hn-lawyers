import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextAnimationDirective } from '@shared/directives/text-animation.directive';

@Component({
    selector: 'app-about-section',
    imports: [CommonModule, TextAnimationDirective],
    templateUrl: './about-section.component.html',
    styleUrl: './about-section.component.scss',
})
export class AboutSectionComponent {}
