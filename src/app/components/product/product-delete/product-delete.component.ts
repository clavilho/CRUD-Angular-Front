import { Product } from "./../product.model";
import { Component, Inject, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ProductReadComponent } from "../product-read/product-read.component";

@Component({
  selector: "app-product-delete",
  templateUrl: "./product-delete.component.html",
  styleUrls: ["./product-delete.component.css"],
})
export class ProductDeleteComponent implements OnInit {
  product: Product;

  constructor(
    private productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialog
  ) {}

  ngOnInit(): void {
    this.productService.readById(this.data).subscribe((product: any) => {
      this.product = product;
    });
  }

  delete() {
    this.productService.delete(this.product.id).subscribe(() => {
      this.productService.showMessage("O item foi excluido com sucesso");
      this.dialogRef.closeAll();
    });
    window.location.reload();
  }

  cancel() {
    this.dialogRef.closeAll();
  }
}
