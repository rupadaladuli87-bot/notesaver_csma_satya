const Note = require("../models/Note");

const createNote = async (req, res) => {
    try {
        const { title, description } = req.body;

        const newNote = await Note.create({
            title,
            description
        });

        res.status(201).json({
            message: "Note created successfully",
            data: newNote
        });

    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error: error.message
        });
    }
};

const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find();

        res.status(200).json(notes);

    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error: error.message
        });
    }
};

const updateNote = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        const updatedNote = await Note.findByIdAndUpdate(
            id,
            {
                title,
                description
            },
            {
                new: true
            }
        );

        res.status(200).json({
            message: "Note updated successfully",
            data: updatedNote
        });

    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error: error.message
        });
    }
};

const deleteNote = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedNote = await Note.findByIdAndDelete(id);

        if (!deletedNote) {
            return res.status(404).json({ message: 'Note not found' });
        }

        res.status(200).json({
            message: 'Note deleted successfully',
            data: deletedNote
        });

    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            error: error.message
        });
    }
};
module.exports = {
    createNote,
    getAllNotes,
    updateNote,
    deleteNote
};
