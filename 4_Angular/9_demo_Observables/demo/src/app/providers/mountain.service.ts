import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of} from 'rxjs';
import { map } from 'rxjs/operators';

import { Mountain } from './../models/mountain.model';

@Injectable()
export class MountainService {
  mountains: Mountain[] = [];

  private usersEndpoint: string = 'http://localhost:3000/mountains/';
	private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  
  constructor(private http: HttpClient){};

  getMountains() : Observable<any> {
    return this.http.get(this.usersEndpoint, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }
}