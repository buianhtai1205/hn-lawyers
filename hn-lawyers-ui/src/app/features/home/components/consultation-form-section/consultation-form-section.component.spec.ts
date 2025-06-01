import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationFormSectionComponent } from './consultation-form-section.component';

describe('ConsultationFormSectionComponent', () => {
    let component: ConsultationFormSectionComponent;
    let fixture: ComponentFixture<ConsultationFormSectionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ConsultationFormSectionComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ConsultationFormSectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
