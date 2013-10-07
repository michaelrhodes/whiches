# whiches
whiches is essentially a streaming wrapper around isaacs’s [which](https://github.com/isaacs/node-which) that adds support for arrays of executables.

## Install
```
npm install whiches
```

### Example
``` js
var whiches = require('whiches')

whiches('vlc')
  .pipe(process.stdout)

// => /usr/bin/vlc

whiches(['chromium', 'node'])
  .pipe(process.stdout)

// => /usr/bin/chromium
//    /usr/bin/node 

whiches(['fakeprogram', 'node', 'anotherfakeprogram'])
  .pipe(process.stdout)

// => /usr/bin/node
```

#### Note
Each path that whiches outputs ends with a new line character, so stream consumers will want to be aware of that.

### License
[MIT](http://opensource.org/licenses/MIT)
