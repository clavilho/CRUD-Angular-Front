import { Product } from "./../product.model";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.css"],
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    name: "",
    price: null,
  };

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {}

  createProduct(): void {
    if (this.product.name === "" || this.product.price === null) {
      this.productService.messageRequire(
        "Necessario preencher os campos para cadastrar um produto"
      );
    } else {
      this.productService.create(this.product).subscribe(() => {
        this.productService.showMessage("Produto Criado!");
        this.router.navigate(["/products"]);
      });
    }
  }

  cancel() {
    this.router.navigate(["/products"]);
  }
}
