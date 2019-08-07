import { Component, OnInit } from '@angular/core';

import { UserService } from './../providers/user.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  
  users: Array<string> = [];


  // create instance of UserService
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
}

}
