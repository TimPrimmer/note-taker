const router = require("express").Router();
const notesDB = require("../../Develop/db/db.json");

router.get("/notes", (req, res) => {
  res.json(notesDB);
});


module.exports = router;