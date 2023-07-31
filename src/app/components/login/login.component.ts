import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any
  pass:any
  empData:any
  constructor(private booksService:BookService,private router:Router) { }

  ngOnInit(): void {
  }
  logIn(){
    this.booksService.get('users').subscribe((res)=>{
      this.empData = res
      const data = this.empData.filter((item:any)=>{
        return item.name == this.user && item.password == this.pass
      
      })
      if(data.length > 0){
        this.booksService.signIn(this.user)
        this.router.navigate(['/header'])
        console.log('ture')
      }else{
        alert("Invalid")
        this.user = ""
        this.pass = ""
        
      }
    })
    }

}
