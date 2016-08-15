
// function isTrue(assertionToCheck) {
//   if (!assertionToCheck) {
//     throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
//   }
//   return console.log("Nice!");
// }

function Assert(){
}

Assert.prototype = {
    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
      }
      return console.log("Nice!");
    }
};

module.exports = Assert;
