# NPM: Node Package Manager
npm is the package manager for JavaScript and the world’s largest software registry.

## Using npm

### Execute in Terminal
```
$ npm

Usage: npm <command>

where <command> is one of:
    access, adduser, bin, bugs, c, cache, completion, config,
    ddp, dedupe, deprecate, dist-tag, docs, doctor, edit,
    explore, get, help, help-search, i, init, install,
    install-test, it, link, list, ln, login, logout, ls,
    outdated, owner, pack, ping, prefix, profile, prune,
    publish, rb, rebuild, repo, restart, root, run, run-script,
    s, se, search, set, shrinkwrap, star, stars, start, stop, t,
    team, test, token, tst, un, uninstall, unpublish, unstar,
    up, update, v, version, view, whoami

npm <command> -h     quick help on <command>
npm -l           display full usage info
npm help <term>  search for help on <term>
npm help npm     involved overview

Specify configs in the ini-formatted file:
    C:\Users\Training\.npmrc
or on the command line via: npm <command> --key value
Config info can be viewed via: npm help config

npm@6.4.1 C:\Program Files\nodejs\node_modules\npm
$ 
```

## Display Installed Modules
### Execute in Terminal
```
$ mkdir demo
$ cd demo
$ npm ls
C:\Users\Training\development\HCA2\MEAN\1_Node\02_NPM\demo
└── (empty)
$ 
```

## Install a Module
### Execute in Terminal (in demo dir)
```
$ npm install logger
npm WARN saveError ENOENT: no such file or directory, open 'C:\Users\Training\development\HCA2\MEAN\1_Node\02_NPM\demo\package.json'
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN enoent ENOENT: no such file or directory, open 'C:\Users\Training\development\HCA2\MEAN\1_Node\02_NPM\demo\package.json'
npm WARN demo No description
npm WARN demo No repository field.
npm WARN demo No README data
npm WARN demo No license field.

+ logger@0.0.1
added 1 package from 1 contributor and audited 1 package in 0.819s
found 0 vulnerabilities

$ dir
07/23/2019  09:03 AM    <DIR>          .
07/23/2019  09:03 AM    <DIR>          ..
07/23/2019  09:03 AM    <DIR>          node_modules
07/23/2019  09:03 AM               249 package-lock.json

$ npm ls
C:\Users\Training\development\HCA2\MEAN\1_Node\02_NPM\demo
└── logger@0.0.1
$
```

Note the node_modules folder was created above, and the logger Package was installed in it.

```
$ dir node_modules
Volume in drive C is OSDisk
Volume Serial Number is D2B1-317A

Directory of C:\Users\Training\development\HCA2\MEAN\1_Node\02_NPM\demo\node_modules

07/23/2019  09:03 AM    <DIR>          .
07/23/2019  09:03 AM    <DIR>          ..
07/23/2019  09:03 AM    <DIR>          logger
               0 File(s)              0 bytes
               3 Dir(s)  205,175,406,592 bytes free
$
```

## Build an App
Note the following requires the data/data.json dir/file to be placed in the demo dir. You can find the data.json file in this repo.

+ create a file named app.js in the demo dir
+ Add the following code
```
  // node app.js

  // require Node's built-in Modules
  const os = require('os');
  const fs = require('fs');

  // require logger Module
  const logger = require('logger').createLogger('log.txt');

  let data = require('./data/data.json');
  let mountains = data.mountains;

  // Get user info from OS
  let user = os.userInfo();
  console.log(user);

  // Write to log
  logger.info(`App accessed by: ${user.username}!\n`);

  Number.prototype.format = function(){
     return this.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  mountains.forEach((mountain, index) => {
    fs.appendFileSync('mountains.txt', `${index + 1}: ${mountain.name}, ${mountain.elevation.format()}'\n`);
  }); 
```

## Run App
Execute the following in a Terminal:
```
$ node app.js
{ uid: -1,
  gid: -1,
  username: 'Training',
  homedir: 'C:\\Users\\Training',
  shell: null }

$ type log.txt 
info [Tue Jul 23 2019 09:06:07 GMT-0400 (Eastern Daylight Time)]  App accessed by: Training!

$ type mountains.txt 
1: Mt. Washington, 6,288'
2: Mt. Adams, 5,799'
3: Mt. Jefferson, 5,716'
...
48: Mt. Tecumseh, 4,003'
```

## Useful link(s)
* [npm repo](https://docs.npmjs.com/)
