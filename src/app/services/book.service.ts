import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseURL:string = "http://localhost:3000"
  constructor(private http:HttpClient) { }
  get(path:any){
    let url =`${this.baseURL}/${path}` 
    return this.http.get(url)
  }
  //get Record
getRecord(path:any,id:any){
  let url = `${this.baseURL}/${path}/${id}`
  return this.http.get(url)
}
  //delete record
 deleteRecords(path:any,id:any){
  let url = `${this.baseURL}/${path}/${id}`
  return this.http.delete(url)
 }

// Add Records
  addRecord(path:any,empData:any){
    let url = `${this.baseURL}/${path}`
    return this.http.post(url,empData)
  }
  //Update Records
  updateRecord(path:any,empData:any){
   let url = `${this.baseURL}/${path}/${empData.id}`
   return this.http.put(url,empData)
  }

  signIn(user:any){
    sessionStorage.setItem("userkey",user)
  }
  signOut(){
    sessionStorage.removeItem("userkey")
  }
}
