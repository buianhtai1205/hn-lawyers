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
export class HomeComponent {
    services = [
        {
            titleSidebar: 'TRỌNG TÀI & TỐ TỤNG TÒA ÁN',
            title: 'Trọng tài & Tố tụng Tòa án',
            description: `Công ty Luật BLawyers Vietnam hỗ trợ nhiều vụ tố tụng Tòa án, tố tụng Trọng tài và đàm phán, thương lượng khác nhau. Chúng tôi cũng có kinh nghiệm trong vấn đề dân sự và thương mại nói chung, bao gồm thu hồi nợ và yêu cầu bồi thường thiệt hại. <br /> <br />
                    Công ty Luật BLawyers Vietnam hỗ trợ nhiều vụ tố tụng Tòa án, tố tụng Trọng tài và đàm phán, thương lượng khác nhau. Chúng tôi cũng có kinh nghiệm trong vấn đề dân sự và thương mại nói chung, bao gồm thu hồi nợ và yêu cầu bồi thường thiệt hại.`,
            moreText: 'MORE ABOUT TRỌNG TÀI & TỐ TỤNG',
            image: 'https://www.blawyersvn.com/wp-content/uploads/2020/06/arbitration-service.jpg',
        },
        {
            titleSidebar: 'DOANH NGHIỆP & ĐẦU TƯ NƯỚC NGOÀI',
            title: 'Doanh nghiệp & Đầu tư nước ngoài',
            description: `Công ty Luật BLawyers Vietnam cung cấp một danh mục đầy đủ các dịch vụ cho khách hàng đầu tư tất cả các lĩnh vực trên khắp lãnh thổ Việt Nam, bao gồm công nghiệp (như là sản xuất và chế biến), nông nghiệp và nuôi trồng thủy sản và dịch vụ (như là vận tải, viễn thông, khách sạn, du lịch và cơ sở hạ tầng thể thao, ngân hàng và tài chính, văn hóa, y tế và giáo dục, khu dân cư, công trình thương mại và xây dựng kết cấu hạ tầng).`,
            moreText: 'MORE ABOUT DOANH NGHIỆP & ĐẦU TƯ NƯỚC NGOÀI',
            image: 'https://www.blawyersvn.com/wp-content/uploads/2020/06/Corporate-Investment.jpg',
        },

        {
            titleSidebar: 'HÔN NHÂN – GIA ĐÌNH & DÂN SỰ',
            title: 'Hôn nhân – Gia đình & Dân sự',
            description: `Các vấn đề về hôn nhân, gia đình và dân sự nên được coi trọng bởi chúng có khả năng tác động lớn đến hạnh phúc và sức khỏe của một cá nhân. Các luật sư của chúng tôi hiểu rằng những vấn đề này phải được tháo gỡ một cách tinh tế để bảo vệ danh dự và quyền riêng tư của các cá nhân có liên quan. Các luật sư của chúng tôi có kinh nghiệm để giải quyết bất kỳ vấn đề nội bộ nào mà bạn có thể gặp phải.`,
            moreText: 'MORE ABOUT HÔN NHÂN & DÂN SỰ',
            image: 'https://www.blawyersvn.com/wp-content/uploads/2020/06/Family-Marriage.jpg',
        },
        {
            titleSidebar: 'LAO ĐỘNG & VIỆC LÀM',
            title: 'Lao động & Việc làm',
            description: `Công ty Luật BLawyers Vietnam có kinh nghiệm phong phú về việc tư vấn cho khách hàng doanh nghiệp về các vấn đề lao động và việc làm. Chúng tôi cũng có kinh nghiệm trong việc bảo vệ người lao động khi đại diện cho họ trong việc thương lượng với người sử dụng lao động của họ về vấn đề chấm dứt quan hệ lao động trái luật và trước tòa án giải quyết tranh chấp liên quan đến lao động.`,
            moreText: 'MORE ABOUT LAO ĐỘNG',
            image: 'https://www.blawyersvn.com/wp-content/uploads/2020/06/Labor-Employment-1.jpg',
        },
        {
            titleSidebar: 'QUYỀN RIÊNG TƯ VỀ DỮ LIỆU',
            title: 'Quyền riêng tư về dữ liệu',
            description: `BLawyers Vietnam có các luật sư chuyên nghiệp chuyên tư vấn các vấn đề bảo vệ dữ liệu, từ thu thập, xử lý, lưu trữ và chuyển giao thông tin cá nhân đến hỗ trợ khách hàng về các vấn đề tuân thủ quy định.`,
            moreText: 'MORE ABOUT QUYỀN RIÊNG TƯ',
            image: 'https://www.blawyersvn.com/wp-content/uploads/2023/09/Du-lieu-ca-nhan-BLawyers-Vietnam.jpg',
        },
        {
            titleSidebar: 'TUÂN THỦ & QUẢN LÝ RỦI RO',
            title: 'Tuân thủ & Quản lý Rủi ro',
            description: `Để giảm thiểu vi phạm pháp luật và các hành vi vi phạm đạo đức khác có thể gây thiệt hại và rủi ro cho công ty và nhân sự điều hành của khách hàng, chúng tôi cung cấp các dịch vụ kiểm tra tuân thủ và quản lý rủi ro cho các khách hàng, chẳng hạn như tạo lập một chương trình tuân thủ, thực hiện các buổi đào tạo, thiết lập và duy trì đường dây nóng tuân thủ bên ngoài và hỗ trợ kiểm tra pháp lý.`,
            moreText: 'MORE ABOUT TUÂN THỦ & RỦI RO',
            image: 'https://www.blawyersvn.com/wp-content/uploads/2020/06/litigation-service.jpg',
        },
        {
            titleSidebar: 'MUA BÁN & SÁP NHẬP',
            title: 'Mua bán & Sáp nhập',
            description: `Đội ngũ Luật sư Mua bán & Sáp nhập (MB&SN) của chúng tôi không chỉ có nền tảng và kỹ năng pháp lý tốt mà còn có tư duy hướng về việc kinh doanh và mối liên kết mạnh mẽ với lĩnh vực MB&SN. Chúng tôi đã tham gia vào nhiều giao dịch đối với doanh nghiệp tại Việt Nam, bao gồm MB&SN, chia tách và tái cấu trúc doanh nghiệp.`,
            moreText: 'MORE ABOUT MUA BÁN & SÁP NHẬP',
            image: 'https://www.blawyersvn.com/wp-content/uploads/2020/06/Mergers-Acquisitions-law.jpg',
        },
        {
            titleSidebar: 'QUYỀN SỞ HỮU TRÍ TUỆ',
            title: 'Quyền sở hữu trí tuệ',
            description: `BLawyers Vietnam có một đội ngũ luật sư có kinh nghiệm về sáng chế, nhãn hiệu, thiết kế, có trình độ và kỹ năng xử lý toàn bộ các dịch vụ pháp lý liên quan đến sở hữu trí tuệ tại Việt Nam. Chúng tôi hỗ trợ khách hàng trong tất cả các bước của giai đoạn quản lý quyền sở hữu trí tuệ.`,
            moreText: 'MORE ABOUT SỞ HỮU TRÍ TUỆ',
            image: 'https://www.blawyersvn.com/wp-content/uploads/2022/09/Intellectual-property-rights-BLawyers-Vietnam.jpg',
        },
        {
            titleSidebar: 'BẤT ĐỘNG SẢN & XÂY DỰNG',
            title: 'Bất động sản & Xây dựng',
            description: `Các luật sư về bất động sản của chúng tôi thường xuyên tư vấn cho các nhà phát triển bất động sản về việc cấp vốn cho dự án, các vấn đề đất đai, khởi động dự án, phát triển dự án, bán các tài sản hình thành trong tương lai và chuyển nhượng dự án.`,
            moreText: 'MORE ABOUT BẤT ĐỘNG SẢN',
            image: 'https://www.blawyersvn.com/wp-content/uploads/2020/06/Real-Estate.jpg',
        },
        {
            titleSidebar: 'NĂNG LƯỢNG TÁI TẠO',
            title: 'Năng lượng tái tạo',
            description: `Các luật sư về năng lượng tái tạo của BLawyer Vietnam có nhiều kinh nghiệm trong các dự án năng lượng tái tạo.`,
            moreText: 'MORE ABOUT NĂNG LƯỢNG',
            image: 'https://www.blawyersvn.com/wp-content/uploads/2023/08/Renewable-energy-BLawyers-Vietnam-1.jpg',
        },
        {
            titleSidebar: 'LĨNH VỰC KHÁC',
            title: 'Lĩnh vực khác',
            description: `Công ty Luật BLawyers Vietnam có kinh nghiệm phong phú trong các lĩnh vực sau: giáo dục, bảo hiểm, kinh doanh mỹ phẩm, tên miền, thương mại quốc tế, sở hữu trí tuệ, khoa học đời sống và chăm sóc sức khỏe, vận chuyển hàng hóa, thuế, viễn thông, truyền thông và công nghệ (TMT), Dịch vụ luật sư tư vấn thường xuyên (hàng tháng/ hàng năm).`,
            moreText: 'MORE ABOUT LĨNH VỰC KHÁC',
            image: 'https://www.blawyersvn.com/wp-content/uploads/2020/06/Others.jpg',
        },
    ];

    selectedServiceIndex = 6;

    selectService(index: number) {
        this.selectedServiceIndex = index;
    }
}
