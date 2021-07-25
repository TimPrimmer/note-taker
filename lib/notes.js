const fs = require("fs");
const path = require("path");
const notesDB = require("../db/db.json");

// checks if a note with a given id exists. true if it does, false if it doesnt
function doesIdExist(idToCheck) {
  let counter = 0;
  notesDB.forEach(function (note) {
    if (idToCheck === note.id) {
      counter++;
    }
  })
  if (counter > 0) {
    return true;
  }
  else {
    return false;
  }
}

// adds the note to the db.json file with a new unique ID
function addNote(newNote) {
  let tempNotes = notesDB;
  newNote.id = tempNotes.length;
  tempNotes.push(newNote);

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(tempNotes, null, 2)
  );

  return tempNotes;
}

// deletes the note from the db.json file given a unique ID
function deleteNote(id) {
  let tempNotes = notesDB;
  tempNotes.forEach(function (note) {
    if (note.id === id) {
      tempNotes.splice(tempNotes.indexOf(note), 1);

      let counter = 0;
      tempNotes.forEach(function (note) { // goes through and re-sets all the IDs for the notes so there's no gaps in numbers and they're all unique
        note.id = counter;
        counter++;
      })

    }
  })

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(tempNotes, null, 2)
  );

  return tempNotes;
}



module.exports = { addNote, deleteNote, doesIdExist };