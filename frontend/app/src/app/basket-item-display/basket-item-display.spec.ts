import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketItemDisplay } from './basket-item-display';

describe('BasketItemDisplay', () => {
  let component: BasketItemDisplay;
  let fixture: ComponentFixture<BasketItemDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasketItemDisplay],
    }).compileComponents();

    fixture = TestBed.createComponent(BasketItemDisplay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
