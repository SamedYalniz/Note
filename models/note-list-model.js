var Note = require('./note-model');

function NoteList(){
  this._notes = [];
}

NoteList.prototype = {
  addNoteToNotes: function(text){
    var note = new Note(text);
    this._notes.push(note);
  },
  getNotes: function(){
    return this._notes;
  },
};

module.exports = NoteList;
