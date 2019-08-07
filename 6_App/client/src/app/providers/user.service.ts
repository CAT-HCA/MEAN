import { Injectable } from '@angular/core';

import {User} from './../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Array to hold User Objects
  users: User[] = [
    new User(1, 'FooBar', 'foobar@test.com', 'password123')
  ];

  // Hard-coded for demo purposes
  USER_NAME: string = 'FooBar';
  EMAIL: string = 'foobar@test.com';
  PASSWORD: string = 'password123';

  constructor() { }

  login(userName: string, password: string) {
    if (userName === this.USER_NAME && password === this.PASSWORD) {
      return  true;
    } else {
      return false;
    }
  }

  register(userName: string, email: string, password: string) {
    console.log(`${userName}, ${email}, ${password}`);
    if (userName === this.USER_NAME || email === this.EMAIL) {
      return false;
    } else {
      this.users.push(new User(this.users.length, userName, email, password));
      return true;
    }
  }

  getUsers(): Array<any> {
    return this.users;
  }
}
