import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackItemGroupDisplay } from './back-item-group-display';

describe('BackItemGroupDisplay', () => {
  let component: BackItemGroupDisplay;
  let fixture: ComponentFixture<BackItemGroupDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackItemGroupDisplay],
    }).compileComponents();

    fixture = TestBed.createComponent(BackItemGroupDisplay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
