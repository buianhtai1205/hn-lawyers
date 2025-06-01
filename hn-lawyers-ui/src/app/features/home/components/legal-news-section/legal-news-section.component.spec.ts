import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalNewsSectionComponent } from './legal-news-section.component';

describe('LegalNewsSectionComponent', () => {
    let component: LegalNewsSectionComponent;
    let fixture: ComponentFixture<LegalNewsSectionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LegalNewsSectionComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(LegalNewsSectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
