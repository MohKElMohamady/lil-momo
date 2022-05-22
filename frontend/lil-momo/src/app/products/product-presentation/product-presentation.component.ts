import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'product-presentation',
  templateUrl: './product-presentation.component.html',
  styleUrls: ['./product-presentation.component.css']
})
export class ProductPresentationComponent implements OnInit {

  @Input()
  public product! : Product | null | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
