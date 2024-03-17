import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategryProductsComponent } from './categry-products.component';

describe('CategryProductsComponent', () => {
  let component: CategryProductsComponent;
  let fixture: ComponentFixture<CategryProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategryProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategryProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
