(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  }

  NoteListView.prototype.getHTML = function () {
    var html = "<ul>";
    this.noteList.getNotes().forEach( function(current_value) {
      html += "<li><div>" + current_value.text + "</div></li>";
    });
    return html + "</ul>";
  };

  exports.NoteListView = NoteListView;
})(this);
