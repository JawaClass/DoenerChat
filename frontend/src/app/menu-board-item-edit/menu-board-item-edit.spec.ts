import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBoardItemEdit } from './menu-board-item-edit';

describe('MenuBoardItemEdit', () => {
  let component: MenuBoardItemEdit;
  let fixture: ComponentFixture<MenuBoardItemEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuBoardItemEdit],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuBoardItemEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
