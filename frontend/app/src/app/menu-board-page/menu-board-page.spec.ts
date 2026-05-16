import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBoardPage } from './menu-board-page';

describe('MenuBoardPage', () => {
  let component: MenuBoardPage;
  let fixture: ComponentFixture<MenuBoardPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuBoardPage],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuBoardPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
