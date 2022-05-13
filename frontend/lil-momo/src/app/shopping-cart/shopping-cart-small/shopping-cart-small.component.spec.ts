import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartSmallComponent } from './shopping-cart-small.component';

describe('ShoppingCartSmallComponent', () => {
  let component: ShoppingCartSmallComponent;
  let fixture: ComponentFixture<ShoppingCartSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCartSmallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
