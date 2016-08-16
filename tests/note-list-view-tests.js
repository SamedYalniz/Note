var modules = require("./modules");

var Note = modules.Note;
var NoteList = modules.NoteList;
var NoteListView = modules.NoteListView;

function testNoteListDisplaysNotes() {

  var noteList = new NoteList(Note);
  noteList.storeNote("Pizza");
  var noteListView = new NoteListView(noteList);
  var htmlTest = "<li><div>Pizza</div></li>";
  //assert.isTrue(noteView.getHTML() === htmlTest);
  console.log(noteListView.getHTML());
}

testNoteListDisplaysNotes();
