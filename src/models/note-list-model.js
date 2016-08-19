(function(exports) {
  function noteList() {
    this._list = [];
  }
  noteList.prototype.readNotes = function () {
    return this._list;
  };

  noteList.prototype.addNote = function(note) {
    var newNote = new Note(note);
    this._list.push(newNote);
  };

  noteList.prototype.getNoteById = function(id) {
    if (!this._list.length) {
      return null;
    } else {
      var searchedNote;
      this.readNotes().forEach(function(note) {
        if(note.id() === id ) {
          searchedNote = note;
        }
      });
      return searchedNote;
    }
  };

  exports.noteList = noteList;
})(this);
