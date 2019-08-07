import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersEndpoint: string = 'http://localhost:3000/users/';
	private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  login(userName: string, password: string) {
    return this.http.post(`${this.usersEndpoint}login`, {userName : userName, userPassword : password}, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }

  register(userName: string, email: string, password: string) {
    return this.http.post(this.usersEndpoint, {userName : userName, userEmail : email, userPassword : password}, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }

  deleteUser(userId: number) {
    return this.http.delete(`${this.usersEndpoint}${userId}`, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }

  getUsers() {
    return this.http.get(this.usersEndpoint, this.httpOptions)
    .pipe(map(res => <any[]>res));
  }
}
