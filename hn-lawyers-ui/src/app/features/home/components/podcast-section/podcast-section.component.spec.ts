import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastSectionComponent } from './podcast-section.component';

describe('PodcastSectionComponent', () => {
    let component: PodcastSectionComponent;
    let fixture: ComponentFixture<PodcastSectionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PodcastSectionComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(PodcastSectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
