import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardprodutdetailComponent } from './cardprodutdetail.component';

describe('CardprodutdetailComponent', () => {
  let component: CardprodutdetailComponent;
  let fixture: ComponentFixture<CardprodutdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardprodutdetailComponent]
    });
    fixture = TestBed.createComponent(CardprodutdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
