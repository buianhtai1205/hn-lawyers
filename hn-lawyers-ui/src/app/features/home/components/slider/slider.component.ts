import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-slider',
    imports: [CommonModule],
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

    slideList: String[] = [
        "https://www.blawyersvn.com/wp-content/uploads/2020/07/Cove_BLawyer-01.jpg",
        "https://www.blawyersvn.com/wp-content/uploads/2020/07/BLawyers-Banner-02-1024x618.jpg",
        "https://www.blawyersvn.com/wp-content/uploads/2020/07/BLawyers-Banner-01.jpg",
        "https://www.blawyersvn.com/wp-content/uploads/2020/07/BLawyers-Banner-03.jpg"
    ]
}