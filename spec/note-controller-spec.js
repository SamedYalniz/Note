

function noteControllerwithList() {
  resetNoteIDs();
  var list = new noteList();
  var controller = new noteController(list);
  assert.isTrue("Controller contains a list", controller._list === list);
}

function noteControllerHTML() {
  resetNoteIDs();
  var list = new noteList();
  var controller = new noteController(list);
  var appDiv = document.createElement('div', {id: "app"});
  document.getElementById = function() {
    return appDiv;
  };
  controller._list.addNote("My favourite drink: seltzer");
  controller.setUpNoteListView();
  controller.HTMLToApp();
  assert.isTrue("Controller outputs to app", document.getElementById('app').innerHTML === '<ul><li><div><a href="#0">My favourite drink: </a></div></li></ul>');
}

function noteIsDisplayedAfterClickOnSinglePage() {
  resetNoteIDs();
  var list = new noteList();
  var controller = new noteController(list);
  controller._list.addNote("one");
  var appDiv = document.createElement('div');
  appDiv.id ="app";
  document.getElementById = function() {
    return appDiv;
  };

  var newlink = document.createElement('a');
  newlink.setAttribute('href','#0');
  newlink.id = "link";
  var noteContent = document.createTextNode('one');
  newlink.appendChild(noteContent);
  document.body.appendChild(newlink);
  controller.changeContentForCurrentNote();
  assert.isTrue("Controller listens for a hashchange", controller.isListening() === true);
  window.location += '#0';
  controller.showNoteForCurrentPage();
    console.log(document.getElementById('app').innerHTML);
    assert.isTrue("Controller puts content of single note page to app element", document.getElementById('app').innerHTML ===
    '<ul><li><div>one</div></li></ul>');



}

noteControllerwithList();
noteControllerHTML();
noteIsDisplayedAfterClickOnSinglePage();
