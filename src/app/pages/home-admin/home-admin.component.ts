import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

  constructor() { }
  userName: any = "default"
  address: any = "default addr"
  email: any = "default email"
  ngOnInit(): void {
    this.userName = localStorage.getItem("name")
    this.address = localStorage.getItem("address")
    this.email = localStorage.getItem("email")
    //console.log("name, addr, email:", this.userName, this.address, this.email )
  }

}
