import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private booksService:BookService,private router:Router) { }

  ngOnInit(): void {
  }
  signUp(data:any){
    const setObj = {
     name: data.name,
     password: data.password
    }
    this.booksService.addRecord('users',setObj).subscribe(()=>{
     alert('Account Created successfully  please Log in')
     this.router.navigate([''])
    })
   }
   
}
