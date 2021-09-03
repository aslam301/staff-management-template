import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitledgerComponent } from './visitledger.component';

describe('VisitledgerComponent', () => {
  let component: VisitledgerComponent;
  let fixture: ComponentFixture<VisitledgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitledgerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitledgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
