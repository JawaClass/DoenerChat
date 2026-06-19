import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuthScreen } from './user-auth-screen';

describe('UserAuthScreen', () => {
  let component: UserAuthScreen;
  let fixture: ComponentFixture<UserAuthScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAuthScreen],
    }).compileComponents();

    fixture = TestBed.createComponent(UserAuthScreen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
