import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportWorkerMapComponent } from './support-worker-map.component';

describe('SupportWorkerMapComponent', () => {
  let component: SupportWorkerMapComponent;
  let fixture: ComponentFixture<SupportWorkerMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportWorkerMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportWorkerMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
