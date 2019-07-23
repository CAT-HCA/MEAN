# Express Server
In this Section we'll look at Express.


## Setup
Create a working dir and run ```npm init```


## Install Modules
```
$ npm install logger express hbs --save
```

## Create the App 

See demo dir cotents.

### Execute in Terminal
```
$ nodemon server.js
[nodemon] 1.14.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
Express Server listening on http://localhost:3000
```

### Launch in Browser
+ [http://localhost:3000](http://localhost:3000)
+ [http://localhost:3000/user](http://localhost:3000/user)
+ [http://localhost:3000/data](http://localhost:3000/data)
+ [http://localhost:3000/contact](http://localhost:3000/contact)
+ [http://localhost:3000/about.html](http://localhost:3000/about.html)

### Execute in Terminal (after stopping server)

```
$ type server.log 

info [Tue Jul 23 2019 14:54:00 GMT-0400 (Eastern Daylight Time)]  Tue Jul 23 2019 14:54:00 GMT-0400 (Eastern Daylight Time): GET /
info [Tue Jul 23 2019 14:54:00 GMT-0400 (Eastern Daylight Time)]  Tue Jul 23 2019 14:54:00 GMT-0400 (Eastern Daylight Time): GET /favicon.ico
info [Tue Jul 23 2019 14:54:09 GMT-0400 (Eastern Daylight Time)]  Tue Jul 23 2019 14:54:09 GMT-0400 (Eastern Daylight Time): GET /user
info [Tue Jul 23 2019 14:54:16 GMT-0400 (Eastern Daylight Time)]  Tue Jul 23 2019 14:54:16 GMT-0400 (Eastern Daylight Time): GET /data
info [Tue Jul 23 2019 14:54:22 GMT-0400 (Eastern Daylight Time)]  Tue Jul 23 2019 14:54:22 GMT-0400 (Eastern Daylight Time): GET /contact
```


## Useful links
* [Express](https://expressjs.com/)
