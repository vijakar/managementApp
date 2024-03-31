import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateStudentService {

  constructor(private _httpClient:HttpClient) { }

  postFormData(data:any):Observable<any>{
    return this._httpClient.post("https://62abe711bd0e5d29af16f450.mockapi.io/Students", data)
  }

  getFormData():Observable<any>{
    return this._httpClient.get("https://62abe711bd0e5d29af16f450.mockapi.io/Students")
  }

  selectedStudent(term:string):Observable<any>{
    return this._httpClient.get("https://62abe711bd0e5d29af16f450.mockapi.io/Students?filter="+term)
  }

  getPages(pageNo:number):Observable<any>{
    return this._httpClient.get("https://62abe711bd0e5d29af16f450.mockapi.io/Students?limit=5&page="+pageNo)
  }

  deleteApi(i:string){
    return this._httpClient.delete("https://62abe711bd0e5d29af16f450.mockapi.io/Students/"+i)
  } 
  

 
}
