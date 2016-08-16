(function (exports) {
  function NoteController(noteList) {
    this._noteList = noteList;
  };
  NoteController.prototype = {
      noteListToHTML: function() {
        var element = document.getElementById("app")
        element.innerHTML = this._noteListView.getHTML();
      },

      setUpNoteListView: function(NoteListView) {
        this._noteListView = NoteListView;
      },
      getNoteList: function() {
        return this._noteList;
      }
  };
  exports.NoteController = NoteController;
})(this);
