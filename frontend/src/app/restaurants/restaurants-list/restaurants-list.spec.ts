import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsList } from './restaurants-list';

describe('RestaurantsList', () => {
  let component: RestaurantsList;
  let fixture: ComponentFixture<RestaurantsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantsList],
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantsList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
