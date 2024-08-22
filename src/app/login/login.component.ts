import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { ToastComponent } from '../common/toastcomponent/toast/toast.component';
import { ToastService } from '../common/toastcomponent/toaster.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Username:string;
  Password:string;
  IsAuthError:boolean = false;

  constructor(private router:Router, private loginservice:LoginService, private toaster:ToastService){}

Reset() {
  this.Username='';
  this.Password = '';
  this.IsAuthError = false;
}
Login() {
  var result:number = 0;
  this.loginservice.ValidateLogin(this.Username, this.Password).subscribe(
    (res) => { result = res.Id;  
    if(result > 0 ){
       this.router.navigate(['/patient?Id='+result]);
      } else {
        this.Username='';
        this.Password = '';
        this.IsAuthError = true;
    }
  }
  );
}
}
