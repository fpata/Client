import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ToastService } from '../common/toastcomponent/toaster.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  httpOptions:any = null;

  constructor(private httpClient:HttpClient, private toastService:ToastService) {
     this.httpOptions = {
      headers: new HttpHeaders( { 'Content-Type': 'application/json' })
   };
   }

   ValidateLogin(Username:string, Password:string):Observable<any>
   {
    var url:string = "http://localhost:8088/login/";
    var authResult :boolean = false;
    var Login = JSON.parse('{"Id":0, "Username":"' + Username + '","Password":"'+ Password +'"}');
    return this.httpClient.post<boolean>(url,Login, this.httpOptions);
   }
}