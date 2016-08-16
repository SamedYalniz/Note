(function(exports) {
  function NoteList(Note) {
    this.noteArray = [];
    this.Note = Note;
  }

  NoteList.prototype.storeNote = function (string) {
    this.noteArray.push(new this.Note(string));
  };

  NoteList.prototype.getNotes = function () {
    return this.noteArray;
  };

  exports.NoteList = NoteList;
})(this);
