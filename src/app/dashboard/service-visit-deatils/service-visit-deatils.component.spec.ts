import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceVisitDeatilsComponent } from './service-visit-deatils.component';

describe('ServiceVisitDeatilsComponent', () => {
  let component: ServiceVisitDeatilsComponent;
  let fixture: ComponentFixture<ServiceVisitDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceVisitDeatilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceVisitDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
