
function isTrue(assertionToCheck) {
  if (!assertionToCheck) {
    throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
  }
};


var assert = require("./assert");
var Note   = require("./note-model");


function noteTakesTextUponInstantiation() {
  var note = new Note("hello");
  isTrue(note._text !== null);
}

noteTakesTextUponInstantiation();
