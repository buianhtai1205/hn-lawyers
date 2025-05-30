import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleCursorComponent } from './bubble-cursor.component';

describe('BubbleCursorComponent', () => {
    let component: BubbleCursorComponent;
    let fixture: ComponentFixture<BubbleCursorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BubbleCursorComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(BubbleCursorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
