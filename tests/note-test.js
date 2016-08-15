//
// function isTrue(assertionToCheck) {
//   if (!assertionToCheck) {
//     throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
//   }
//   return console.log("Nice!");
// }


var Assert = require("./assert");
var Note   = require("../models/note-model");
var assert = new Assert();


function noteTakesTextUponInstantiation() {
  var note = new Note("hello");
  assert.isTrue(note._text !== null);
}

noteTakesTextUponInstantiation();

function hasMethodToReturnText(){
  var note = new Note("what's up");
  assert.isTrue(note.getText() == "what's up");
}

hasMethodToReturnText();
