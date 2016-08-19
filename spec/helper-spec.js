(function(exports) {
function resetNoteIDs() {
      note = new Note();
      note.resetIDs();
      return "notes are resetted";
    }
   exports.resetNoteIDs = resetNoteIDs;
})(this);
