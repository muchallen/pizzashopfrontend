import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'app/product.model';
import { ProductService } from 'app/service/product.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
   allProducts:[]=[];
   cart:Product[]
   selectedProduct
  
  quantity:number=1

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.loadScripts();
    this.getProducts();
    this.cart= this.productService.cartProducts;
  }


    getProducts() {
     this.productService.getProducts().then(res => {
      this.allProducts=this.productService.allroducts
      console.log(this.allProducts)
     });
  }

  showDetails(product) {
    this.selectedProduct = product
  }

  addToCart() { 
    this.productService.cartProducts?.filter(prod=>prod.id==this.selectedProduct.id).length>0 ?
    this.productService.cartProducts?.forEach(prod=>{
      if(prod.id==this.selectedProduct.id){
        prod.pQuantity=this.quantity
        this.cart= this.productService.cartProducts;
        this.quantity=1
        this.productService.getTotal()
      }}):
    this.productService.cartProducts?.push({...this.selectedProduct,pQuantity:this.quantity})
    this.cart= this.productService.cartProducts;
    this.quantity=1
    this.productService.getTotal()
 
   
  }

  loadScripts() {
    const dynamicScripts = [
    "assets/js/jquery.min.js",
    "assets/js/jquery-migrate-3.0.1.min.js",
    "assets/js/popper.min.js",
    "assets/js/bootstrap.min.js",
    "assets/js/jquery.easing.1.3.js"
    ,"assets/js/jquery.waypoints.min.js"
    ,"assets/js/jquery.stellar.min.js"
    ,"assets/js/owl.carousel.min.js"
    ,"assets/js/jquery.magnific-popup.min.js"
    ,"assets/js/aos.js"
    ,"assets/js/jquery.animateNumber.min.js"
, "assets/js/bootstrap-datepicker.js"
,"assets/js/jquery.timepicker.min.js"
,"assets/js/scrollax.min.js"
,"assets/js/google-map.js"
,"assets/js/main.js" 

    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

}
