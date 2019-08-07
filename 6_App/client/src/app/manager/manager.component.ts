import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../providers/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  
  users: Array<User> = [];

  // create instance of UserService
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      data.forEach((user, index) => {
        this.users.push(new User(user.ID, user.USER_NAME, user.EMAIL_ADDRESS, user.PASSWORD));
      })
    });
  }

  onDelete(userId: number): void {
      // Call UserService to delete User
      this.userService.deleteUser(userId).subscribe(data => {
        //this.router.navigate(['manager']);
        window.location.reload();
      });
  }
}
