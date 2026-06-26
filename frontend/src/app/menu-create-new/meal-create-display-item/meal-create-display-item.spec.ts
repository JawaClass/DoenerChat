import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealCreateDisplayItem } from './meal-create-display-item';

describe('MealCreateDisplayItem', () => {
  let component: MealCreateDisplayItem;
  let fixture: ComponentFixture<MealCreateDisplayItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealCreateDisplayItem],
    }).compileComponents();

    fixture = TestBed.createComponent(MealCreateDisplayItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
