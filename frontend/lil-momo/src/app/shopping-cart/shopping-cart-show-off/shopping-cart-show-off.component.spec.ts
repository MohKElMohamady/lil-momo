import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartShowOffComponent } from './shopping-cart-show-off.component';

describe('ShoppingCartShowOffComponent', () => {
  let component: ShoppingCartShowOffComponent;
  let fixture: ComponentFixture<ShoppingCartShowOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCartShowOffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartShowOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
