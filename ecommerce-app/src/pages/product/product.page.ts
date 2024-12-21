import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  product: Product;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProduct();
  }

  loadProduct() {
    const productId = 1; // Replace with dynamic ID as needed
    this.productService.getProductById(productId).subscribe((data: Product) => {
      this.product = data;
    });
  }
}