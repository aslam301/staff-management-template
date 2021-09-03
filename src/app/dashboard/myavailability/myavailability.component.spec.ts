import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyavailabilityComponent } from './myavailability.component';

describe('MyavailabilityComponent', () => {
  let component: MyavailabilityComponent;
  let fixture: ComponentFixture<MyavailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyavailabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyavailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
