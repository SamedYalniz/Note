var Assert = require("./assert");
var NoteList = require("../models/note-list-model");
var NoteView = require("../models/note-view-model");
var assert = new Assert();
var noteList = new NoteList();
var noteView = new NoteView(noteList);

var htmlString = "<ul><li><div>example</div></li><li><div>example</div></li><li><div>example</div></li></ul>";


for (i=0; i<3; i++){
  noteList.addNoteToNotes("example");
}


function takesNoteListUponInstantiation() {
  assert.isTrue(noteView !== null);
}
takesNoteListUponInstantiation();

function returnsNoteListAsHTML() {
  assert.isTrue(noteView.returnListAsHTML() == htmlString);
}

returnsNoteListAsHTML();

function canTakeListWithoutNotes() {
  var noteView = new NoteView(new NoteList());
  assert.isTrue(noteView.returnListAsHTML() == "<ul></ul>" );

}
canTakeListWithoutNotes();

  function canTakeListWithOneNote(){
    var noteList = new NoteList();
    noteList.addNoteToNotes("hello");
    var noteView = new NoteView(noteList);
    assert.isTrue(noteView.returnListAsHTML() == "<ul><li><div>hello</div></li></ul>");
  }
canTakeListWithOneNote();
