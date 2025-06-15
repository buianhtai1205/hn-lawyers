import { Component } from '@angular/core';

import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { AboutIntroComponent } from './components/about-intro/about-intro.component';
import { AboutWorkStyleComponent } from './components/about-work-style/about-work-style.component';
import { AboutCoreValuesComponent } from './components/about-core-values/about-core-values.component';
import { AboutVisionComponent } from './components/about-vision/about-vision.component';
import { AboutPartnerComponent } from './components/about-partner/about-partner.component';

@Component({
    selector: 'app-about',
    imports: [
        HeaderComponent,
        FooterComponent,
        AboutIntroComponent,
        AboutWorkStyleComponent,
        AboutCoreValuesComponent,
        AboutVisionComponent,
        AboutPartnerComponent,
    ],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
})
export class AboutComponent {}
