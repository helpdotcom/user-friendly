var useragent = require('useragent')

module.exports = UserFriendly

function UserFriendly(str) {
  if (!(this instanceof UserFriendly))
    return new UserFriendly(str)

  this.str = str
  this.parsed = useragent.parse(str)
}

UserFriendly.prototype.browser = function browser() {
  var ua = this.parsed
  if (!ua.family) return 'Unknown'
  return ua.toAgent()
}

UserFriendly.prototype.os = function os() {
  var ua = this.parsed
  var os = ua.os
  if (!os) return 'Unknown'
  var vers = os.toVersion()
  if (!vers || vers === '0.0.0')
    return os.family

  return os.toString()
}
