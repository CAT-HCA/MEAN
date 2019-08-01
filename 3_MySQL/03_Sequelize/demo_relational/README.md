# HCA2
## MEAN Stack
### MySQL: Sequelize - Relational

Note that this Demo assumes you have a local MySQL installation and that you know how to create a new DB User. 

This example assumes a MySQL User with the following
+ username: hca
+ password: password
+ creds: DBA

## Setup
+ Create MySQL DB User as defined above
+ Execute sql/create.sql in MySQL to build the DB
+ Create .env file containing the following

DB_DATABASE=demo
DB_USERNAME=hca
DB_PASSWORD=password

+ Create a working dir and run ```npm init```
+ See code in demo


## Install Modules
```
$ npm install express body-parser mysql2 sequelize dotenv --save
$ npm install -g mysql sequelize-auto
```

## Generate Models and Migrate DB
```
$ sequelize-auto -o "./models" -d demo -h localhost -u hca -p 3306 -x password -e mysql

    Executing (default): SHOW TABLES;
    Executing (default): SELECT         K.CONSTRAINT_NAME as constraint_name       , K.CONSTRAINT_SCHEMA as source_schema       , K.TABLE_SCHEMA as source_table       , K.COLUMN_NAME as source_column       , K.REFERENCED_TABLE_SCHEMA AS target_schema       , K.REFERENCED_TABLE_NAME AS target_table       , K.REFERENCED_COLUMN_NAME AS target_column       , C.extra       , C.COLUMN_KEY AS column_key       FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE AS K       LEFT JOIN INFORMATION_SCHEMA.COLUMNS AS C         ON C.TABLE_NAME = K.TABLE_NAME AND C.COLUMN_NAME = K.COLUMN_NAME       WHERE         K.TABLE_NAME = 'AUTOMOBILES'         AND K.CONSTRAINT_SCHEMA = 'demo';
    Executing (default): SELECT         K.CONSTRAINT_NAME as constraint_name       , K.CONSTRAINT_SCHEMA as source_schema       , K.TABLE_SCHEMA as source_table       , K.COLUMN_NAME as source_column       , K.REFERENCED_TABLE_SCHEMA AS target_schema       , K.REFERENCED_TABLE_NAME AS target_table       , K.REFERENCED_COLUMN_NAME AS target_column       , C.extra       , C.COLUMN_KEY AS column_key       FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE AS K       LEFT JOIN INFORMATION_SCHEMA.COLUMNS AS C         ON C.TABLE_NAME = K.TABLE_NAME AND C.COLUMN_NAME = K.COLUMN_NAME       WHERE         K.TABLE_NAME = 'MANUFACTURER'         AND K.CONSTRAINT_SCHEMA = 'demo';
    Executing (default): DESCRIBE `AUTOMOBILES`;
    Executing (default): DESCRIBE `MANUFACTURER`;
    Done!

$ sequelize db:migrate
```

### Launch App
+ Ensure MySQL is started
+ Start server.js
```
$ node server
```


### Test in Postman (See Postman Collection)


## Useful links
* [MySQL](https://www.mysql.com/)
* [Sequelize](http://docs.sequelizejs.com/)
