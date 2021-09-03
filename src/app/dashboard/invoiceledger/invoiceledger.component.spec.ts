import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceledgerComponent } from './invoiceledger.component';

describe('InvoiceledgerComponent', () => {
  let component: InvoiceledgerComponent;
  let fixture: ComponentFixture<InvoiceledgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceledgerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceledgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
