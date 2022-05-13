import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartShellComponent } from './shopping-cart-shell.component';

describe('ShoppingCartShellComponent', () => {
  let component: ShoppingCartShellComponent;
  let fixture: ComponentFixture<ShoppingCartShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCartShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
