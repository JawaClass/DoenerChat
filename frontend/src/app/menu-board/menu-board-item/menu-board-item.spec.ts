import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBoardItem } from './menu-board-item';

describe('MenuBoardItem', () => {
  let component: MenuBoardItem;
  let fixture: ComponentFixture<MenuBoardItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuBoardItem],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuBoardItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
