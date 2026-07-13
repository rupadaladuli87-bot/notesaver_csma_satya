const express = require("express");

const router = express.Router();

const {
    createNote,
    getAllNotes,
    updateNote,
    deleteNote
} = require("../controllers/noteController");

router.post("/notes", createNote);
router.get("/notes", getAllNotes);
router.put("/notes/:id", updateNote);
router.delete("/notes/:id", deleteNote);

module.exports = router;