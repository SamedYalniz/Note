(function(exports) {
  function noteController(notelist) {
    this._list = notelist;
  }

  noteController.prototype.setUpNoteListView = function () {
    this._noteListView = new noteListView(this._list);
  };

  noteController.prototype.HTMLToApp = function () {
    var element = document.getElementById("app");
    element.innerHTML = this._noteListView.toHTML();
  };

  noteController.prototype.isListening = function() {
    return this.listeningStatus;
  };
  noteController.prototype.changeContentForCurrentNote = function () {
    console.log(0);
    window.addEventListener("hashchange", this.showNoteForCurrentPage);
      this.listeningStatus = true;
  };
  noteController.prototype.showNoteForCurrentPage = function() {
        console.log(1);
          showNote(getNoteFromUrl(window.location));



          function getNoteFromUrl(location) {
               console.log(2);
               return location.hash.split("#")[1];

           }

    function showNote(note_id) {
       var noteView = new SingleNoteView(list.getNoteById(note_id));
       var element = document.getElementById('app');
       element.innerHTML = noteView.noteAsHTML();
       console.log('It is working');
       debugger;

      }
    };

//   noteController.prototype.getNoteFromUrl = function(location) {
//     console.log(2);
//
//         return location.hash.split("#")[1];
//         debugger;
// };




  exports.noteController = noteController;
})(this);
