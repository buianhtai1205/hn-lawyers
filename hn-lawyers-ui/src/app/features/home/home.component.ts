import { Component } from '@angular/core';
import { SliderComponent } from './components/slider/slider.component';

@Component({
  selector: 'app-home',
  imports: [SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
