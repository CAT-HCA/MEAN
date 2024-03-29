# Angular Data and Property Binding

## Create App
```
$ ng new demo
...
? Would you like to add Angular routing? No
? Which stylesheet format would you like to use? CSS
CREATE demo/angular.json (3409 bytes)
CREATE demo/package.json (1277 bytes)
...
Project 'demo' successfully created.
$ 
```

## Load App
```
$ cd demo
$ ng serve
...
webpack: Compiled successfully.
```

[http://localhost:4200/](http://localhost:4200/)


## Modify App (Data Binding)
+ In the Terminal, in the demo dir, execute the following to install Bootstrap
```
npm install bootstrap --save
+ bootstrap@4.3.1
added 1 package from 2 contributors and audited 17092 packages in 18.593s
found 0 vulnerabilities
```

+ Open .angular.json and modify the "styles" property to the following

```
  "styles": [
          "./node_modules/bootstrap/dist/css/bootstrap.min.css",
          "styles.css"
        ]
```

+ Reload the page to confirm Bootstrap has been applied.

+ Open src/index.html and change the title to "Mountains"
```
  <title>Mountains</title>
```

+ Open src/app/app.module.ts and replace the default code with the following
```
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { FormsModule } from '@angular/forms';

  import { AppComponent } from './app.component';

  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
```

+ Open src/app/app.component.ts and change the "title" value to "Mountains", and add "mountainName", "mountainElevation", "mountainDescription", and "currentYear" properties

```
  export class AppComponent {
    title = 'Mountains';
    
    mountainName: string = '';
    mountainElevation: string = '';
    mountainDescription: string = '';
    currentYear: number = 2019;
  }
```

+ Open src/app/app.component.html and repalce the default code with the following

```
<div class="container">
  <h1>{{title}}</h1>
  
  <div class="container">
    <div class="form-group">
      <label for="mountainName">Mountain Name</label>
      <input type="text" class="form-control" id="mountainName" placeholder="Enter a Mountain Name"required autofocus [(ngModel)]="mountainName" />
    </div>
    <div class="form-group">
      <label for="mountainElevation">Elevation</label>
      <input type="text" class="form-control" id="mountainElevation" placeholder="Elevation" required [(ngModel)]="mountainElevation" />
    </div>
    <div class="form-group">
      <label for="mountainDescription">Description</label>
      <input type="text" class="form-control" id="mountainDescription" placeholder="(optional)" [(ngModel)]="mountainDescription" />
    </div>
  </div>
  <div class="container" id="mountainsDiv">
      <hr />
      <h3>Mountains</h3>
      <!--
        String Interpolation: Whatever is evaluated in the TypeScript expression inside the String Interpolation braces {{ }} resolves to a String.
        {{ TypeScript_Expression }}  => result is a String
      -->
      {{ 'Mountain:' }} {{mountainName}} - {{mountainElevation}}'
      <br />{{mountainDescription}}
  </div>
  
  <div class="container">
    <hr />
    <!-- Even though currentYear is defined as type number in app.component.ts, it resolves to a string -->
    <footer class="pull-right">&copy; {{currentYear}}</footer>
  </div>
</div>
```

+ In src/app/app.component.ts create the following getCrrentYear() method

```
  export class AppComponent {
    title = '4k Mountains';
      
    // propName: type = defaultValue
    mountainName: string = '';
    mountainElevation: string = '';
    mountainDescription: string = '';
    currentYear: number = 2019;
    
    // declare a method
    getCurrentYear(): number {
      return this.currentYear;
    }
  }
```

+ In src/app/app.component.html, use the method to get the current year
```
  <div class="container">
    <hr />
    <!-- Even though currentYear is defined as type number in app.component.ts, it resolves to a string -->
    <!--<footer class="pull-right">&copy; {{currentYear}}</footer>-->
    <!-- Make call to method to get year -->
    <footer class="pull-right">&copy; {{getCurrentYear()}}</footer>
  </div>
```

## Modify App (Property Binding)

+ In src/app/app.component.ts, add the following property

```
  addNewMountains: boolean = true;
```

+ In src/app/app.component.html, add a button to the bottom of the form-group as follows
```
  <div class="container">
    <div class="form-group">
      <label for="mountainName">Mountain Name</label>
      <input type="text" class="form-control" id="mountainName" placeholder="Enter a Mountain Name"required autofocus [(ngModel)]="mountainName" />
    </div>
    <div class="form-group">
      <label for="mountainElevation">Elevation</label>
      <input type="text" class="form-control" id="mountainElevation" placeholder="Elevation" required [(ngModel)]="mountainElevation" />
    </div>
    <div class="form-group">
      <label for="mountainDescription">Description</label>
      <input type="text" class="form-control" id="mountainDescription" placeholder="(optional)" [(ngModel)]="mountainDescription" />
    </div>
    <!-- Property Binding: [ ] -->
    <button type="button" class="btn btn-primary" [disabled]="addNewMountains">Add Mountain</button>
  </div>
```

+ In src/app/app.component.ts, set addNewMountains value = false

```
  addNewMountains: boolean = false;
```

![Angular](img/img_1.png?raw=true "Angular")


+ In src/app/app.component.ts add the following values to the exisiting properties

```
  mountainName: string = 'Mt. Washington';
  mountainElevation: string = '6288';
  mountainDescription: string = 'Mt. Washington (6,288 feet) is the highest peak east of the Mississippi River and north of the Carolinas. The upper part of the mountain has a climate similar to that of northern Labrador and supports a variety of alpine flora and fauna.';
```

![Angular](img/img_2.png?raw=true "Angular")


NOTE: Although the button is enabled, there is no action to be taken.
