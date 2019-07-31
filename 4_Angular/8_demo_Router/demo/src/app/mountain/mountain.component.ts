import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MountainService } from './../providers/mountain.service';

@Component({
  selector: 'app-mountain',
  templateUrl: './mountain.component.html',
  styleUrls: ['./mountain.component.css']
})
export class MountainComponent implements OnInit {
  sub: any;
  userName: string = '';
  mountains: Array<string> = [];
    
  // create instance of MountainService
  constructor(private mountainService: MountainService,
    private route: ActivatedRoute,
    private router: Router) {}
    
    ngOnInit() {
      // get username from Query Params
      // Subscribe to Observable
      // pass anonymoue callback function to subscribe method
      this.sub = this.route
                .queryParams
                .subscribe(params => {
                  this.userName = params['username'];
                });
      
      this.mountains = this.mountainService.getMountains();
    }

    onLogout() {
      this.router.navigate(['/']);
    }
}
