const fs = require("fs");
const path = require("path");
const notesDB = require("../db/db.json");

function doesIdExist (idToCheck) {
  let counter = 0;
  notesDB.forEach(function(note) {
    if (idToCheck === note.id) {
      counter++;
    }
  })
  if (counter > 0) {
    return true;
  }
  else 
  {
    return false;
  }
}


function addNote (newNote) {
  let tempNotes = notesDB;
  newNote.id = tempNotes.length;
  tempNotes.push(newNote);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(tempNotes, null, 2)
  );

  return tempNotes;
}

function deleteNote (id) {
  let tempNotes = notesDB;
  tempNotes.forEach(function(note) {
    if (note.id === id) {
      tempNotes.splice(tempNotes.indexOf(note), 1);
    }
  })

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(tempNotes, null, 2)
  );
  
  return tempNotes;
}



module.exports = {addNote,deleteNote,doesIdExist};