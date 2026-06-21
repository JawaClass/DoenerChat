import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsCreateFirst } from './restaurants-create-first';

describe('RestaurantsCreateFirst', () => {
  let component: RestaurantsCreateFirst;
  let fixture: ComponentFixture<RestaurantsCreateFirst>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantsCreateFirst],
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantsCreateFirst);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
