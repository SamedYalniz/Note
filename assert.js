
function isTrue(assertionToCheck) {
  if (!assertionToCheck) {
    throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
  }
};
