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
  FullName:string;
  Role:string;

  constructor(private router:Router, private loginservice:LoginService, private toaster:ToastService){}

Reset() {
  this.Username='';
  this.Password = '';
  this.IsAuthError = false;
  this.FullName ='';
  this.Role ='';
}
Login() {
  var result:number = 0;
  this.loginservice.ValidateLogin(this.Username, this.Password).subscribe(
    (res) => { result = res.Id;  
      this.FullName = res.FullNamee;
      this.Role = res.Role;
    if(result > 0 && this.Role == 'Patient'){
       this.router.navigate(['/patient/'+result]);
      } else if(result > 0 && (this.Role == 'Admin' || this.Role == 'Doctor')){
        this.router.navigate(['/dashboard/']);
      } else {
        this.Username='';
        this.Password = '';
        this.IsAuthError = true;
        this.FullName ='';
        this.Role ='';
    }
  }
  );
}
}
