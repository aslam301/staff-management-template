import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShedulesheduleComponent } from './sheduleshedule.component';

describe('ShedulesheduleComponent', () => {
  let component: ShedulesheduleComponent;
  let fixture: ComponentFixture<ShedulesheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShedulesheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShedulesheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
