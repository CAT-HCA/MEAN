# User Input
In this Section we'll learn how to get User Input from the command-line.


## Setup
### Execute in Terminal
```
$ mkdir demo
$ cd demo
$ npm init
...
Is this ok? (yes) yes
```


## Create an App (using built-in Modules)
+ In your working dir, create a file named app.js and enter the following code
```
  console.log('Staring App...');

  // Use Node Process Object
  var args = process.argv;
  console.log(args);
```

### Execute in Terminal
```
$ node app.js
Staring App...
[ 'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\Training\\development\\HCA2\\MEAN\\1_Node\\03_User_Input\\demo\\app.js' ]


$ node app.js insert
Staring App...
[ 'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\Training\\development\\HCA2\\MEAN\\1_Node\\03_User_Input\\demo\\app.js',
  'insert' ]


$ node app.js insert --name="Mt. Washington"
Staring App...
[ 'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\Training\\development\\HCA2\\MEAN\\1_Node\\03_User_Input\\demo\\app.js',
  'insert',
  '--name=Mt. Washington' ]
```

## Modify App 
+ Add the following code to the bottom of app.js
```
  var command = args[2];
  console.log(`command: ${command}`);

  var name = args[3];
  console.log(`Name: ${name}`);
```

### Execute in Terminal
```
node app.js insert --name="Mt. Washington"
Staring App...
[ 'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\Training\\development\\HCA2\\MEAN\\1_Node\\03_User_Input\\demo\\app.js',
  'insert',
  '--name=Mt. Washington' ]
command: insert
Name: --name=Mt. Washington
```


## Create an App (using third-party Modules)
+ Install yargs Module

```
$ npm install yargs --save
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN demo@1.0.0 No description
npm WARN demo@1.0.0 No repository field.

+ yargs@13.3.0
added 26 packages from 9 contributors and audited 40 packages in 2.127s
found 0 vulnerabilities
```

+ In your working dir, create a file named app_yargs.js and enter the following code
```
  console.log('Staring App...');

  // require yargs
  const yargs = require('yargs');

  var args = yargs.argv;
  console.log(args);

  // use Process
  var command = process.argv[2];
  console.log(`command: ${command}`);

  // user yargs
  var name = args.name;
  console.log(`Name: ${name}`);
```


### Execute in Terminal
```
$ node app_yargs.js insert --name="Mt. Washington"
Staring App...
{ _: [ 'insert' ], name: 'Mt. Washington', '$0': 'app_yargs.js' }
command: insert
Name: Mt. Washington
```

## Useful links
* [node Process](https://nodejs.org/api/process.html)
* [yargs](https://www.npmjs.com/package/yargs)
