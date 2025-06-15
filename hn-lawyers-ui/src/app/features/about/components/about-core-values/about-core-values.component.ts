import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-about-core-values',
    imports: [CommonModule],
    templateUrl: './about-core-values.component.html',
    styleUrl: './about-core-values.component.scss',
})
export class AboutCoreValuesComponent {
    coreValues = [
        {
            icon: '/assets/icons/honesty.svg',
            title: 'NÓI LÀ LÀM',
            desc: 'Chúng tôi luôn thực hiện đúng những gì đã cam kết với khách hàng và đối tác.',
        },
        {
            icon: '/assets/icons/customer.svg',
            title: 'CHIẾN ĐẤU VÌ SỰ HÀI LÒNG CỦA KHÁCH HÀNG',
            desc: 'Chúng tôi nỗ lực tối đa để mang lại sự hài lòng và giá trị tốt nhất cho khách hàng.',
        },
        {
            icon: '/assets/icons/trust.svg',
            title: 'KHÔNG ĐẢO GIỮ ĐỘC LẬP, LUÔN NHÌN RA TRONG CÔNG VIỆC',
            desc: 'Chúng tôi giữ vững nguyên tắc, không để các yếu tố bên ngoài ảnh hưởng đến chất lượng dịch vụ.',
        },
        {
            icon: '/assets/icons/home.svg',
            title: 'CỐNG TỪ LÀ NHÀ',
            desc: 'Chúng tôi xây dựng môi trường làm việc thân thiện, đoàn kết như một gia đình.',
        },
        {
            icon: '/assets/icons/learn.svg',
            title: 'THỪA NHẬN KHUYẾT ĐIỂM ĐỂ HỌC HỎI & CẢI THIỆN',
            desc: 'Chúng tôi luôn cầu thị, sẵn sàng lắng nghe và cải thiện để phát triển.',
        },
        {
            icon: '/assets/icons/fast.svg',
            title: 'NHANH & CHÍNH XÁC',
            desc: 'Chúng tôi giải quyết công việc với tốc độ và độ chính xác cao.',
        },
    ];
}
