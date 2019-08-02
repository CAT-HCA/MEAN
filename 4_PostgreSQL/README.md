# HCA2
## MEAN Stack
### PostgreSQL

Note: This example will use [PostgreSQL](https://www.postgresql.org/) in place of [MongoDB](https://www.mongodb.com/) for our Database. 

This example assumes a PostgreSQL User with the following
+ username: hca
+ password: password
+ creds: DBA

## App Setup
```
$ mkdir demo
$ cd demo
$ npm init
$ npm install express body-parser pg pg-hstore sequelize -save
```

See demo code.


## PostgreSQL Setup
+ Create PostgreSQL DB User as defined above
+ Create a DB named demo in PostgreSQL using [pgAdmin4](http://127.0.0.1:49799/browser/)
+ Execute the following to build and populate the DB with test data
```
$ cd db
$ node migrate
    (sequelize) Warning: PostgresSQL does not support 'INTEGER' with LENGTH, UNSIGNED or ZEROFILL. Plain 'INTEGER' will be used instead.
    >> Check: http://www.postgresql.org/docs/9.4/static/datatype.html
    (node:13696) [SEQUELIZE0004] DeprecationWarning: A boolean value was passed to options.operatorsAliases. This is a no-op with v5 and should be removed.
    Executing (default): SELECT 1+1 AS result
    connected
    Executing (default): DROP TABLE IF EXISTS "AUTOMOBILE" CASCADE;
    Executing (default): DROP TABLE IF EXISTS "MANUFACTURER" CASCADE;
    Executing (default): DROP TABLE IF EXISTS "MANUFACTURER" CASCADE;
    Executing (default): CREATE TABLE IF NOT EXISTS "MANUFACTURER" ("ID"   SERIAL , "NAME" VARCHAR(100) NOT NULL UNIQUE, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL, PRIMARY KEY ("ID"));
    Executing (default): SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'MANUFACTURER' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;
    Executing (default): DROP TABLE IF EXISTS "AUTOMOBILE" CASCADE;
    Executing (default): CREATE TABLE IF NOT EXISTS "AUTOMOBILE" ("ID"   SERIAL , "MODEL" VARCHAR(25) NOT NULL, "YEAR" VARCHAR(4) NOT NULL, "MSRP" VARCHAR(6) NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL, "MANUFACTURERID" INTEGER REFERENCES "MANUFACTURER" ("ID") ON DELETE SET NULL ON UPDATE CASCADE, PRIMARY KEY ("ID"));
    Executing (default): SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'AUTOMOBILE' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;
    migrated

$ node seed
    (sequelize) Warning: PostgresSQL does not support 'INTEGER' with LENGTH, UNSIGNED or ZEROFILL. Plain 'INTEGER' will be used instead.
    >> Check: http://www.postgresql.org/docs/9.4/static/datatype.html
    (node:14828) [SEQUELIZE0004] DeprecationWarning: A boolean value was passed to options.operatorsAliases. This is a no-op with v5 and should be removed.
    Executing (default): SELECT 1+1 AS result
    connected
    Executing (default): DELETE FROM "MANUFACTURER"
    Executing (default): INSERT INTO "MANUFACTURER" ("ID","NAME","createdAt","updatedAt") VALUES (DEFAULT,'Tesla','2019-08-02 15:42:54.539 +00:00','2019-08-02 15:42:54.539 +00:00'),(DEFAULT,'Porche','2019-08-02 15:42:54.539 +00:00','2019-08-02 15:42:54.539 +00:00');
    Executing (default): DELETE FROM "AUTOMOBILE"
    Executing (default): INSERT INTO "AUTOMOBILE" ("ID","MODEL","YEAR","MSRP","createdAt","updatedAt","MANUFACTURERID") VALUES (DEFAULT,'MODEL S','2014','38,500','2019-08-02 15:42:54.560 +00:00','2019-08-02 15:42:54.560 +00:00',1),(DEFAULT,'MODEL S','2019','81,500','2019-08-02 15:42:54.560 +00:00','2019-08-02 15:42:54.560 +00:00',1),(DEFAULT,'MODEL 3','2019','45,000','2019-08-02 15:42:54.560 +00:00','2019-08-02 15:42:54.560 +00:00',1),(DEFAULT,'MODEL X','2016','64,500','2019-08-02 15:42:54.560 +00:00','2019-08-02 15:42:54.560 +00:00',1),(DEFAULT,'MODEL X','2019','82,500','2019-08-02 15:42:54.560 +00:00','2019-08-02 15:42:54.560 +00:00',1),(DEFAULT,'718','2019','56,900','2019-08-02 15:42:54.560 +00:00','2019-08-02 15:42:54.560 +00:00',2),(DEFAULT,'911','2019','97,400','2019-08-02 15:42:54.560 +00:00','2019-08-02 15:42:54.560 +00:00',2),(DEFAULT,'Cayman','2019','86,300','2019-08-02 15:42:54.560 +00:00','2019-08-02 15:42:54.560 +00:00',2);
```

## Test
+ run ```npm start```
+ Test using Postman Collection


## Useful links
* [w3schools](https://www.w3schools.com)
* [PostgreSQL](https://www.postgresql.org/)
* [Sequelize](http://docs.sequelizejs.com/)
* [postman](https://www.getpostman.com)
