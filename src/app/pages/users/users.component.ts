import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }
  users : any =
  [
    {
      name : "lisa",
      email : "lisa@gmail.com",
      address : "bbsr",
      role: "admin"
    },
    {
      name : "lima",
      email : "lima@gmail.com",
      address : "bbsr1",
      role: "user"
      
    },
    {
      name : "bubul",
      email : "bubul@gmail.com",
      address : "bbsr2",
      role: "student"
    },
    {
      name : "situ",
      email : "situ@gmail.com",
      address : "bbsr3",
      role: "student"
    }
  ]
  ngOnInit(): void {
  }

}
