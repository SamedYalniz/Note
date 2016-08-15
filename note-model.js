
function Note(text){
  this._text = text;
}

Note.prototype = {
    getText: function() {
      return this._text;
    },
};

module.exports = Note;


// (function(exports) {
//   var EXCLAMATION_MARK_COUNT = 5;
//
//   function exclaim(string) {
//     return string + "!".repeat(EXCLAMATION_MARK_COUNT);
//   }
//
//   exports.exclaim = exclaim;
// })(this);
