import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutWorkStyleComponent } from './about-work-style.component';

describe('AboutWorkStyleComponent', () => {
    let component: AboutWorkStyleComponent;
    let fixture: ComponentFixture<AboutWorkStyleComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AboutWorkStyleComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(AboutWorkStyleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
