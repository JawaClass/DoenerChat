import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordInputField } from './password-input-field';

describe('PasswordInputField', () => {
  let component: PasswordInputField;
  let fixture: ComponentFixture<PasswordInputField>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordInputField],
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordInputField);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
