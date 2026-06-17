import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBoard } from './menu-board';

describe('MenuBoard', () => {
  let component: MenuBoard;
  let fixture: ComponentFixture<MenuBoard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuBoard],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuBoard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
