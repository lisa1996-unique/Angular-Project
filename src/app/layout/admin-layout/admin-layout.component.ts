import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  constructor(private router:Router) { }
  userName: any = "default"
  
  ngOnInit(): void {
    this.userName = localStorage.getItem("name")
    
  }

  logout(){
    //console.log("inside logout")
    localStorage.removeItem("name")
    this.router.navigateByUrl("/")
  }

}
