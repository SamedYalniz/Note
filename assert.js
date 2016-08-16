(function(exports) {

  function isTrue(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed:" + assertionToCheck + " is NOT truthy");
    } else {
      console.log("tests pass");
    }
  }

  function isFalse(assertionToCheck) {
    if(assertionToCheck) {
      throw new Error("Assertion failed:" + assertionToCheck + " is NOT falsy");
    }
  }

  exports.assert = {
  isTrue: isTrue,
  isFalse: isFalse
}
})(this);