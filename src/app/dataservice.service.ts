import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  constructor(private http:HttpClient) { }
  Url1 = "http://localhost:3000/users";
  Url2 = "http://localhost:3000/adddata";


  getAllUser():Observable<any>{
    return this.http.get(`${this.Url1}`)
  }
  addData(data:any):Observable<any>{
    console.log(data,"Data Added Successful");
    return this.http.post(`${this.Url2}`,data)
  }

}
