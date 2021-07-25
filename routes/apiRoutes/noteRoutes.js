const router = require("express").Router();
const notesDB = require("../../db/db.json");
const noteUtils = require("../../lib/notes.js");

router.get("/notes", (req, res) => {
  res.json(notesDB);
});

router.post("/notes", (req, res) => {
  let response = noteUtils.addNote(req.body);
  res.json(response);
});

router.delete('/notes/:id', (req, res) => {
  let id = parseInt([req.params.id]);
  if (noteUtils.doesIdExist(id)) {
    let response = noteUtils.deleteNote(id);
    res.json(response);
  }
  else 
  {
    res.status(500).send({ error: "Invalid ID" });
  }
});

module.exports = router;