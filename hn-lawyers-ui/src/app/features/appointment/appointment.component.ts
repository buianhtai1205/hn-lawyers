import { Component } from '@angular/core';

import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
    selector: 'app-appointment',
    imports: [HeaderComponent, FooterComponent],
    templateUrl: './appointment.component.html',
    styleUrl: './appointment.component.scss',
})
export class AppointmentComponent {}
