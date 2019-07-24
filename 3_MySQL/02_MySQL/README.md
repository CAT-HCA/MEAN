# HCA2
## MEAN Stack
### Express

Note that this Demo assumes you have a local MySQL installation and that you know how to create a new DB User. 

This example assumes a MySQL User with the following
+ username: hca
+ password: password
+ creds: DBA

## Setup
+ Create MySQL DB User as defined above
+ Execute sql/create_and_seed.sql in MySQL to build and populate the DB with test data

![MySQL Workbench](img/mysql_workbench.png?raw=true "MySQL Workbench")

+ Create a working dir and run ```npm init```
+ See code in demo

## Install Modules
```
$ npm install express body-parser mysql promise-mysql --save
```

### Launch App
+ Ensure MySQL is started
+ Start server.js
```
$ node server
```


### Test in Postman (POST)
+ Set Headers Content-Type = application/x-www-form-urlencoded
+ Set Body as follows

![Postman](img/postman.png?raw=true "Postman")

+ Click Send

![Postman](img/results.png?raw=true "Postman")




## Useful links
* [MySQL](https://www.mysql.com/)
* [promise-mysql npm](https://www.npmjs.com/package/promise-mysql)
* [MySQL Workbench](https://www.mysql.com/products/workbench/)