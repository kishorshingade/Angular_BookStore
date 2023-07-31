import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 books:any = []
 allBooks:any
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getBooks().subscribe((res)=>{
  this.books = res
    })
  }
  remove(item:any){
    this.cartService.removeCartItem(item)
  }
  removeAll(){
    this.cartService.removeAllCart()
  }
  order(){
    this.cartService.getBooks().subscribe((res)=>{
      console.log(res)
    })
  }
}
