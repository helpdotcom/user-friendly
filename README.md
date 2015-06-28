# user-friendly

[![Build Status](https://travis-ci.org/evanlucas/user-friendly.svg)](https://travis-ci.org/evanlucas/user-friendly)

User friendly user agent querying

## Install

```bash
$ npm install user-friendly
```

## API

```js
var UserFriendly = require('user-friendly')
var str = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.1 Safari/537.36'

var uf = UserFriendly(str)
console.log(uf.browser())
// => 'Chrome 41.0.2227'
console.log(uf.os())
// => 'Mac OS X 10.10.1'
```

*See test/fixtures.json for other examples of expected output*

## Author

Evan Lucas

## License

MIT (See `LICENSE` for more info)
