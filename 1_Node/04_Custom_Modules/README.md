# Custom Modules
In this Section we'll learn how to create, and require, custom modules.


## Setup

### Execute in Terminal
```
$ mkdir demo
$ cd demo
$ npm init
...
Is this ok? (yes) yes
```


## Install Modules

### Execute in Terminal
```
$ npm install logger --save
$ npm install yargs --save
```


## Create the App

In your working dir, create the following files
+ app.js
+ mountains.js

View the files in the demo dir for code.

### Execute in Terminal
```
$ node app.js --name="Mt. Washington" --elev="6,288"

$ node app.js insert  --elev="6,288"

$ node app.js delete --name="Mt. Washington" --elev="6,288"

$ node app.js insert --name="Mt. Washington" --elev="6,288"
Mountain Created: Mt. Washington 6,288!

$ node app.js insert --name="Mt. Washington" --elev="6,288"
Mountain not created: Duplicate mountain (Mt. Washington) found!

$ type mountains.json 
[{"name":"Mt. Washington","elev":"6,288"}]

$ type log.txt 
info [Tue Jul 23 2019 09:23:39 GMT-0400 (Eastern Daylight Time)]  App accessed by Training: Failure - Command not found.
info [Tue Jul 23 2019 09:23:45 GMT-0400 (Eastern Daylight Time)]  App accessed by Training: Failure - Missing Mountain Data param(s).
info [Tue Jul 23 2019 09:23:51 GMT-0400 (Eastern Daylight Time)]  App accessed by Training: Failure - Command (delete) not able to be processed.
info [Tue Jul 23 2019 09:23:56 GMT-0400 (Eastern Daylight Time)]  App accessed by Training: Success - Mt. Washington, 6,288.
info [Tue Jul 23 2019 09:24:07 GMT-0400 (Eastern Daylight Time)]  App accessed by Training: Failure - Mountain not created: Duplicate mountain (Mt. Washington) found.

$ node app.js insert --name="Mt. Adams" --elev="5,799"
Mountain Created: Mt. Adams 5,799!

$ type mountains.json 
[{"name":"Mt. Washington","elev":"6,288"},{"name":"Mt. Adams","elev":"5,799"}]
```

