import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-about-vision',
    imports: [CommonModule],
    templateUrl: './about-vision.component.html',
    styleUrl: './about-vision.component.scss',
})
export class AboutVisionComponent {
    lawyers = [
        {
            img: '/assets/lawyers/ngonhatminh.jpg',
            name: 'NGÔ NHẬT MINH',
            title: 'Giám đốc điều hành, Luật sư chuyên nghiệp',
        },
        { img: '/assets/lawyers/tranngocthuyet.jpg', name: 'TRẦN NGỌC THUYẾT', title: 'Luật sư thành viên cao cấp' },
    ];
}
