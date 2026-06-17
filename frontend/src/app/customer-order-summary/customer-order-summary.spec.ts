import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOrderSummary } from './customer-order-summary';

describe('CustomerOrderSummary', () => {
  let component: CustomerOrderSummary;
  let fixture: ComponentFixture<CustomerOrderSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerOrderSummary],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerOrderSummary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
