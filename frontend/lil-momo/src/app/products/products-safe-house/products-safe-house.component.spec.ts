import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSafeHouseComponent } from './products-safe-house.component';

describe('ProductsSafeHouseComponent', () => {
  let component: ProductsSafeHouseComponent;
  let fixture: ComponentFixture<ProductsSafeHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsSafeHouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsSafeHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
