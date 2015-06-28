var test = require('tap').test
  , UserFriendly = require('../')
  , fixtures = require('./fixtures')

test('OS X / iOS', function(t) {
  var fixs = fixtures.osx
    , len = fixs.length

  fixs.forEach(function(fix) {
    test(fix.input, function(t) {
      var uf = UserFriendly(fix.input)
      t.plan(3)
      t.equal(uf.str, fix.input)
      t.equal(uf.browser(), fix.browser)
      t.equal(uf.os(), fix.os)
    })
  })

  t.end()
})

test('Windows', function(t) {
  var fixs = fixtures.windows
    , len = fixs.length

  fixs.forEach(function(fix) {
    test(fix.input, function(t) {
      var uf = UserFriendly(fix.input)
      t.plan(3)
      t.equal(uf.str, fix.input)
      t.equal(uf.browser(), fix.browser)
      t.equal(uf.os(), fix.os)
    })
  })

  t.end()
})

test('Linux', function(t) {
  var fixs = fixtures.linux
    , len = fixs.length

  fixs.forEach(function(fix) {
    test(fix.input, function(t) {
      var uf = UserFriendly(fix.input)
      t.plan(3)
      t.equal(uf.str, fix.input)
      t.equal(uf.browser(), fix.browser)
      t.equal(uf.os(), fix.os)
    })
  })

  t.end()
})
