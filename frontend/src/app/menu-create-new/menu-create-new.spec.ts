import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCreateNew } from './menu-create-new';

describe('MenuCreateNew', () => {
  let component: MenuCreateNew;
  let fixture: ComponentFixture<MenuCreateNew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuCreateNew],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuCreateNew);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
