import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide: boolean = true;
  onSubmit(form: NgForm){
    console.log(form);
  }

  userInfor =
    {
      userName: "",
      passWord: "",
      rememberMe: false
    };

    userNamePattern = /^[a-z]{6,32}$/i;
    passwordPattern = /^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/;

}
