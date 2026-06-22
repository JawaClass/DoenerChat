import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewRestaurant } from './create-new-restaurant';

describe('CreateNewRestaurant', () => {
  let component: CreateNewRestaurant;
  let fixture: ComponentFixture<CreateNewRestaurant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateNewRestaurant],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateNewRestaurant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
