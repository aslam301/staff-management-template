import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffLandingPageComponent } from './staff-landing-page.component';

describe('StaffLandingPageComponent', () => {
  let component: StaffLandingPageComponent;
  let fixture: ComponentFixture<StaffLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
