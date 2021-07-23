const fs = require("fs");
const path = require("path");
const notesDB = require("../../Develop/db/db.json");

function addNote (newNote) {
  let tempNotes = notesDB;
  tempNotes.push(newNote);

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(tempNotes, null, 2)
  );
  
  return tempNotes;
}



module.exports = {addNote};