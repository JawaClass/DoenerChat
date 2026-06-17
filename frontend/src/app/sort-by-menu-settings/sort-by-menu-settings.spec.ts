import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortByMenuSettings } from './sort-by-menu-settings';

describe('SortByMenuSettings', () => {
  let component: SortByMenuSettings;
  let fixture: ComponentFixture<SortByMenuSettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortByMenuSettings],
    }).compileComponents();

    fixture = TestBed.createComponent(SortByMenuSettings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
