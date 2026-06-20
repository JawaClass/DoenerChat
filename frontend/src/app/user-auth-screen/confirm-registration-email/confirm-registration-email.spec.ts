import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmRegistrationEmail } from './confirm-registration-email';

describe('ConfirmRegistrationEmail', () => {
  let component: ConfirmRegistrationEmail;
  let fixture: ComponentFixture<ConfirmRegistrationEmail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmRegistrationEmail],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmRegistrationEmail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
