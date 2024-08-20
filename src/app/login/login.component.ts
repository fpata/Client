import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Username:string;
  Password:string;

  constructor(private router:Router){}

Reset() {
  this.Username='';
  this.Password = '';
}
Login() {
  this.router.navigate(['/dashboard']);
}

}
