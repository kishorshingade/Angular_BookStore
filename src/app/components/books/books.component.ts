import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  productList:any
  term:any
  p: number = 1
    constructor(private booksService:BookService,private cartService:CartService) { }
  
    ngOnInit(): void {
    this.booksService.get('books').subscribe((res)=>{
      this.productList =res

      this.productList.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total: a.price})
      })
    })
    }
   addToCart(item:any){
    this.cartService.addToCart(item)
    alert('Book added To Cart')
   }
}
