import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemsPageComponent } from './cart-items-page.component';

describe('CartItemsPageComponent', () => {
  let component: CartItemsPageComponent;
  let fixture: ComponentFixture<CartItemsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartItemsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
