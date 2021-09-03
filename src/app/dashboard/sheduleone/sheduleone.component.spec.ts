import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheduleoneComponent } from './sheduleone.component';

describe('SheduleoneComponent', () => {
  let component: SheduleoneComponent;
  let fixture: ComponentFixture<SheduleoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SheduleoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SheduleoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
