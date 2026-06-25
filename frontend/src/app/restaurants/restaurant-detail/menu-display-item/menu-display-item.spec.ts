import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDisplayItem } from './menu-display-item';

describe('MenuDisplayItem', () => {
  let component: MenuDisplayItem;
  let fixture: ComponentFixture<MenuDisplayItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuDisplayItem],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuDisplayItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
