import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustpmerOrdersComponent } from './custpmer-orders.component';

describe('CustpmerOrdersComponent', () => {
  let component: CustpmerOrdersComponent;
  let fixture: ComponentFixture<CustpmerOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustpmerOrdersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustpmerOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
