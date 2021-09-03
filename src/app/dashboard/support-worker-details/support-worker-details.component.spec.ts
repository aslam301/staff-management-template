import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportWorkerDetailsComponent } from './support-worker-details.component';

describe('SupportWorkerDetailsComponent', () => {
  let component: SupportWorkerDetailsComponent;
  let fixture: ComponentFixture<SupportWorkerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportWorkerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportWorkerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
