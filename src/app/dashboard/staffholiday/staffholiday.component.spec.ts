import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffholidayComponent } from './staffholiday.component';

describe('StaffholidayComponent', () => {
  let component: StaffholidayComponent;
  let fixture: ComponentFixture<StaffholidayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffholidayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffholidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
