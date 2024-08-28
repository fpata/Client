import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/Authentication.service';
import { ToastComponent } from '../common/toastcomponent/toast/toast.component';
import { ToastService } from '../common/toastcomponent/toaster.service';
import { LoginUser } from './login.model';
import { first } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  user:LoginUser ;

  constructor(private router:Router, private loginservice:AuthenticationService, private toaster:ToastService ){
    this.user = new LoginUser()
  }

Reset() {
  this.user = new LoginUser();
}

Login() {
  var result:number = 0;
  this.loginservice.ValidateLogin(this.user.Username, this.user.Password).pipe(first()).subscribe({
   next: (res) => { result = res.Id;  
      this.user.FullName = res.FullNamee;
      this.user.Role = res.Role;
    if(result > 0 && this.user.Role == 'Patient'){
       this.router.navigate(['/patient/'+result]);
      } else if(result > 0 && (this.user.Role == 'Admin' || this.user.Role == 'Doctor')){
        this.router.navigate(['/dashboard/']);
      } 
  },
  error: error => {
    console.log(error);
  }
});
}
}
