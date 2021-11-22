import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { TopNavComponent } from '../top-nav/top-nav.component';

@Component({
  providers:  [TopNavComponent],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  registerForm:FormGroup;
  loginPage:boolean=true;
  errMsg:boolean=false;
  errReg:boolean= false;
  userData:any;

  constructor(private _myService: CommonService, private _router:Router, private navcomponent: TopNavComponent) { 
    this.loginForm = new FormGroup({
      username :new FormControl('', Validators.required),
      password : new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
     this.registerForm = new FormGroup({
       username :new FormControl('', [Validators.required]),
       password : new FormControl('', [Validators.required]),
       firstName :new FormControl('', [Validators.required]),
   lastName: new FormControl('', [Validators.required]),
   confirmPassword : new FormControl('', [Validators.required])
     })
  }

  togglePage(){
    this.loginPage = !this.loginPage
  }

  loginUser(){
    this.errMsg = false;
this._myService.login({username: this.loginForm.controls.username.value, password: this.loginForm.controls.password.value}).subscribe((data)=>{
  this.userData = data.userDetails;
  this.navcomponent.username = this.userData.username
  localStorage.setItem('userId', this.userData.userId)
   this._router.navigate(['/home']);
},err=> this.errMsg = true)
  
  }

  registerUser(){
    this.errReg = false
    let user={
        userId: 0,
        firstName: this.registerForm.controls.firstName.value,
        lastName: this.registerForm.controls.lastName.value,
        username: this.registerForm.controls.username.value,
        password: this.registerForm.controls.password.value,
        gender: 'Male',
        userTypeId: 0
    }
    this._myService.register(user).subscribe((data)=>{
      this.loginPage = true
    }, err => this.errReg = true)
  }

}
