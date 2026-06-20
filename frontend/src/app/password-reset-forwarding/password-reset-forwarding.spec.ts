import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordResetForwarding } from './password-reset-forwarding';

describe('PasswordResetForwarding', () => {
  let component: PasswordResetForwarding;
  let fixture: ComponentFixture<PasswordResetForwarding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordResetForwarding],
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordResetForwarding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
