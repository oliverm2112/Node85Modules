# Node 8.5 Modules Syntax Demo

A small demo of module syntax support in Node.js 8.5.

### Install Node.js 8.5

OK, so you're not ready to commit to upgrading to Node.js 8.5 on your system, I get it!

Use one of these Node.js version managers to make switching versions easy:

##### On Mac/Linux, install the n module
```
sudo npm install -g n
sudo n --help
sudo n 8.5.0
node --version
```

To revert to your previous version, run
```
sudo n
```
...and select from the list.

Note, when you first run `n`, it might report that you do not have any Node.js versions installed.
In this case, tell it to grab your current version first:
```
node --version {note your current version number}
sudo n {insert your current version number}
node --version {ensure that the version is correct}
```


##### On Windows, install the nvm app

Go to [https://github.com/coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows) 
and download the installer from the
[releases link](https://github.com/coreybutler/nvm-windows/releases).

Use similar syntax as per the `n` module above.


### Run the Sample App

Do **not** run ```npm install```

Simply run
```
npm start
```

### Some Notes
1. Note that the file extensions are all `.mjs`. This is required by Node if you want to use the new
Modules syntax. You may want to tell your IDE to treat this file extension the same as a regular
 `.js` file.
2. The `npm start` command invokes Node.js with a special command-line parameter,
 ```--experimental-modules``` which will dump out a warning on the console that this feature is still
considered experimental.
3. **Warning**: Once you specify ```--experimental-modules```, you can no longer use the familiar
 ```require()``` syntax.
