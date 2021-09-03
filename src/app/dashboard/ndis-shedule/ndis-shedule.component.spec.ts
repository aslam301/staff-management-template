import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NdisSheduleComponent } from './ndis-shedule.component';

describe('NdisSheduleComponent', () => {
  let component: NdisSheduleComponent;
  let fixture: ComponentFixture<NdisSheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NdisSheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NdisSheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
