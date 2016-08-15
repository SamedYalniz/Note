

function NoteView(noteList) {
  this._noteList = noteList;
}
NoteView.prototype = {
  returnListAsHTML: function() {
    var htmlString ="<ul>";
    for(i=0;i<this._noteList.getNotes().length;i++) {
      htmlString += "<li><div>" + this._noteList.getNotes()[i].getText() + "</div></li>";
    }
    return htmlString += "</ul>";
  }

};

module.exports = NoteView;
