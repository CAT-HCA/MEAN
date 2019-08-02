import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mountains';

  mountainName: string = 'Mt. Washington';
  mountainElevation: string = '6288';
  mountainDescription: string = 'Mt. Washington (6,288 feet) is the highest peak east of the Mississippi River and north of the Carolinas. The upper part of the mountain has a climate similar to that of northern Labrador and supports a variety of alpine flora and fauna.';
  currentYear: number = 2019;

  addNewMountains: boolean = false;

  // declare a method
  getCurrentYear(): number {
    return this.currentYear;
  }
}
