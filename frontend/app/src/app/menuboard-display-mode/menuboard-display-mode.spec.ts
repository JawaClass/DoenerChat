import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuboardDisplayMode } from './menuboard-display-mode';

describe('MenuboardDisplayMode', () => {
  let component: MenuboardDisplayMode;
  let fixture: ComponentFixture<MenuboardDisplayMode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuboardDisplayMode],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuboardDisplayMode);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
