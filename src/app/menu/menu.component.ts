import { Component, OnInit } from '@angular/core';
import { Product } from 'app/product.model';
import { ProductService } from 'app/service/product.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  cartTotal=0
  math=Math
  vat=0
  grandTotal=0
  
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.loadScripts()
    this.productService.getTotal()
    this.cartTotal= this.productService.cartTotal
    this.vat= this.math.floor(this.cartTotal * 0.10*100)/100
    this.grandTotal = this.vat + this.cartTotal 
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



