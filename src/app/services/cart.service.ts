import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cartItemList : any = []
booksList = new BehaviorSubject<any>([])
  constructor(private http:HttpClient) { }
getBooks(){
  return this.booksList.asObservable()
}

setBook(book:any){
  this.cartItemList.push(...book)
  this.booksList.next(book)
}

addToCart(book:any){
  this.cartItemList.push(book)
  this.booksList.next(this.cartItemList)
  console.log(this.cartItemList)
}

removeCartItem(book:any){
  this.cartItemList.map((a: any, index: any) => {
    if (book.id === a.id) {
      this.cartItemList.splice(index, 1);
    }
  })
  this.booksList.next(this.cartItemList);
}

removeAllCart(){
  this.cartItemList = []
  this.booksList.next(this.cartItemList)
}

}



