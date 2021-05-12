import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  name:any
  password:any

  constructor(private router : Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("name") != null) {
      this.router.navigateByUrl("admin")
    } else {
      this.router.navigateByUrl("/")
    }
  }

  login(){
    // console.log("inside login, name, password", this.name, this.password)
    if(this.name=="lisa" && this.password=="1234"){
      localStorage.setItem("name", "lisa")
      localStorage.setItem("address", "bbsr")
      localStorage.setItem("email", "lisa@gmail.com")
      this.router.navigateByUrl("admin")
            
    } else {
      alert("Invalid Credentials")
    }
  }

}
