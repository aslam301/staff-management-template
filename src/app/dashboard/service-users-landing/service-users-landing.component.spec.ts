import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceUsersLandingComponent } from './service-users-landing.component';

describe('ServiceUsersLandingComponent', () => {
  let component: ServiceUsersLandingComponent;
  let fixture: ComponentFixture<ServiceUsersLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceUsersLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceUsersLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
