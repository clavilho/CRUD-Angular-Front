import { ProductDeleteComponent } from "./../product-delete/product-delete.component";
import { Product } from "./../product.model";
import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { MatDialog } from "@angular/material/dialog";
@Component({
  selector: "app-product-read",
  templateUrl: "./product-read.component.html",
  styleUrls: ["./product-read.component.css"],
})
export class ProductReadComponent implements OnInit {
  products: Product[] = [];
  displayedColumns = ["id", "name", "price", "action"];

  constructor(
    private productService: ProductService,
    public dialogRef: MatDialog
  ) {}

  ngOnInit(): void {
    this.readProduct();
  }

  readProduct() {
    this.productService.read().subscribe((prodcut: any) => {
      this.products = prodcut;
    });
  }

  abrirModal(product: any): void {
    this.dialogRef.open(ProductDeleteComponent, {
      data: product,
    });
  }
}
