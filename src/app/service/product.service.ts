import { Injectable } from '@angular/core';
import axios from 'axios';
import { Product } from 'app/product.model';
import { Observable } from 'rxjs';
import { HomeComponent } from 'app/home/home.component';
import { CartComponent } from 'app/cart/cart.component';

@Injectable()
export class ProductService {


  cartProducts=[]
  cartTotal=0
  allroducts:[]=[]
  rootUrl = 'https://pizzashop33.herokuapp.com/api/v1/products'

  constructor() {
    this.getTotal()
   }

  async getProducts(){
   await axios.get(this.rootUrl + `/all`).then(( res)=>{      
  return this.allroducts=res.data.map(prod=>{
          return{...prod, productQuantity:1}
  })
}).catch(( err)=> console.log(err))}

getTotal(){
  var sum = 0
   this.cartProducts?.forEach(product=> { sum = sum + (product?.pQuantity*product?.pprice)})
   this.cartTotal=sum
   console.log(this.cartTotal)
}
  




}
