var stream = require('stream')
var util = require('util')
var which = require('which')

var i = 0

var Whiches = function(programs) {
  if (!(this instanceof Whiches)) {
    return new Whiches(programs)
  } 

  stream.Readable.call(this)

  // Allow input to be a string or an array.
  // (Other types will blow up, but oh well.) 
  this.programs = (!Array.isArray(programs) ?
    Array(programs) :
    programs
  )
}

util.inherits(Whiches, stream.Readable)

Whiches.prototype._read = function() {
  var self = this
  ;(function check() {
    var program = self.programs[i++]

    // End the stream if there aren’t
    // any more programs to check.
    if (!program) {
      self.push(null)
      return 
    }

    which(program, function(error, path) {
      if (error) {
        // Continue checking until the
        // end of the programs array.
        return check()
      }
      self.push(path + '\n')
    })
  })()
}

module.exports = Whiches
