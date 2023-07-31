import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
totalNumber :any
  constructor(private cartApi:CartService,private booksService:BookService,private router:Router) { }

  ngOnInit(): void {
    this.cartApi.getBooks().subscribe((res)=>{
    this.totalNumber = res.length
    })
  }
  logOut(){
    if(confirm('Do You Want to Log Out?')){
      this.booksService.signOut()
      this.router.navigate([''])
    }

  }

}
