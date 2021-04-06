import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  albumInfo;
  private ProductService _productService;

  constructor(private ProductService : _productService) {

  }

  ngOnInit() {
    this._productService.getAlbum(1).then(suscribe(response => this.albumInfo = response));
  }

}
