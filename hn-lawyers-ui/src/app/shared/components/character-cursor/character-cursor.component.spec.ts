import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCursorComponent } from './character-cursor.component';

describe('CharacterCursorComponent', () => {
    let component: CharacterCursorComponent;
    let fixture: ComponentFixture<CharacterCursorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CharacterCursorComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(CharacterCursorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
