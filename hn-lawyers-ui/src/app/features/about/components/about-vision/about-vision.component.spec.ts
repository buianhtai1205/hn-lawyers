import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

import { AboutVisionComponent } from './about-vision.component';

describe('AboutVisionComponent', () => {
    let component: AboutVisionComponent;
    let fixture: ComponentFixture<AboutVisionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AboutVisionComponent, CommonModule],
        }).compileComponents();

        fixture = TestBed.createComponent(AboutVisionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
