import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSectionComponent } from './about-section.component';

describe('AboutSectionComponent', () => {
    let component: AboutSectionComponent;
    let fixture: ComponentFixture<AboutSectionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AboutSectionComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(AboutSectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
