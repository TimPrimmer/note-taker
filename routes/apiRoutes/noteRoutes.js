const router = require("express").Router();
const notesDB = require("../../Develop/db/db.json");
const noteUtils = require("../../Develop/lib/notes.js");

router.get("/notes", (req, res) => {
  res.json(notesDB);
});

router.post("/notes", (req, res) => {
  let response = noteUtils.addNote(req.body);
  res.json(response);
});


module.exports = router;