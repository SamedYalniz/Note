var Assert = require("./assert");
var Note   = require("../models/note-model");
var NoteList = require("../models/note-list-model");
var assert = new Assert();

function storesArrayOfNoteModels(){
  var noteList = new NoteList();
  for (i = 0; i < 3; i++){
    var note = new Note("note" + i);
    noteList.addNoteToNotes(note);
  }
  // console.log(noteList._notes);
  assert.isTrue(noteList._notes.length == 3);
}

storesArrayOfNoteModels();

function returnListOfNotes(){
  var noteList = new NoteList();
  for (i = 0; i < 3; i++){
    var text = ('note' + i);
    noteList.addNoteToNotes(text);
  }
  // console.log(JSON.stringify(noteList.getNotes()));
  assert.isTrue(noteList.getNotes()[2].getText() == 'note2');
}

returnListOfNotes();
