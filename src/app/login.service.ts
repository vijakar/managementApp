import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _httpClient:HttpClient) { }

  submitLogin(data:any){
    return this._httpClient.post("https://reqres.in/api/login",data)
  }
}
