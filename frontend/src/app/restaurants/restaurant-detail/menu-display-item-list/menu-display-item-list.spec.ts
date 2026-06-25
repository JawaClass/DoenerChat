import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDisplayItemList } from './menu-display-item-list';

describe('MenuDisplayItemList', () => {
  let component: MenuDisplayItemList;
  let fixture: ComponentFixture<MenuDisplayItemList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuDisplayItemList],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuDisplayItemList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
