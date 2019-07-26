# HCA2
## MEAN Stack
### MySQL: Sequelize - Service via AJAX REST callse

Note that this Demo assumes you have a local MySQL installation and that you know how to create a new DB User. 

This example assumes a MySQL User with the following
+ username: hca
+ password: password
+ creds: DBA

## Setup
+ Create MySQL DB User as defined above
+ Execute sql/create_and_seed.sql in MySQL to build the DB
+ Create .env file containing the following

DB_DATABASE=demo
DB_USERNAME=hca
DB_PASSWORD=password

+ Create a working dir and run ```npm init```
+ See code in demo


## Install Modules
```
$ npm install express body-parser mysql2 sequelize dotenv --save
```

### Launch App
+ Ensure MySQL is started
+ Start server.js
```
$ node server
```

### Test
+ Simply open ```index.html``` in your browser
+ Load the Add Mountains page to enter Mountains


## Useful links
* [MySQL](https://www.mysql.com/)
* [Sequelize](http://docs.sequelizejs.com/)
