import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCreateNewForRestaurant } from './menu-create-new-for-restaurant';

describe('MenuCreateNewForRestaurant', () => {
  let component: MenuCreateNewForRestaurant;
  let fixture: ComponentFixture<MenuCreateNewForRestaurant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuCreateNewForRestaurant],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuCreateNewForRestaurant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
