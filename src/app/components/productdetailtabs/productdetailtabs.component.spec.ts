import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetailtabsComponent } from './productdetailtabs.component';

describe('ProductdetailtabsComponent', () => {
  let component: ProductdetailtabsComponent;
  let fixture: ComponentFixture<ProductdetailtabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductdetailtabsComponent]
    });
    fixture = TestBed.createComponent(ProductdetailtabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
