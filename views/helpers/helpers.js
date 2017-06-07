var register = function (Handlebars) {
  var helpers = {
      // put all of your helpers inside this object
    primeNumber: function (num) {
      if (num === 1) {
        return false
      }
      else if (num === 2) {
        return true
      }
      else {
        for (var i = 2; i < num; i++) {
          if (num % i === 0) return false
        } return true
      }
    }
  }
  if (Handlebars && typeof Handlebars.registerHelper === 'function') {
    // register helpers
    for (var prop in helpers) {
      Handlebars.registerHelper(prop, helpers[prop])
    }
  } else {
      // just return helpers object if we can't register helpers here
    return helpers
  }
}

// client
if (typeof window !== 'undefined') {
    register(Handlebars)
}
// server
else {
    module.exports.register = register
    module.exports.helpers = register(null)
}
