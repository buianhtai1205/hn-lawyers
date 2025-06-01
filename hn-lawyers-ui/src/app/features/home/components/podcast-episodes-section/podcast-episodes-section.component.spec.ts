import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastEpisodesSectionComponent } from './podcast-episodes-section.component';

describe('PodcastEpisodesSectionComponent', () => {
    let component: PodcastEpisodesSectionComponent;
    let fixture: ComponentFixture<PodcastEpisodesSectionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PodcastEpisodesSectionComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(PodcastEpisodesSectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
