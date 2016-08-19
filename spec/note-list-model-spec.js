function createNotesList() {
  resetNoteIDs();
  var list = new noteList();
  list.addNote("I love ruby");
  assert.isTrue("Creates notelist", list.readNotes()[0].readNote() === "I love ruby");
}

function returnsNoteById() {
  resetNoteIDs();
  var list = new noteList();
  list.addNote("one");
  list.addNote("two");
  assert.isTrue("view returns note by id", list.getNoteById(0).readNote() === "one");
}



createNotesList();
returnsNoteById();
