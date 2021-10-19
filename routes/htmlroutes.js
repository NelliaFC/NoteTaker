const express = require ('express').Router();
const path = require ('path');

express.get('/notes',(req, res) => {
//we want a res.sendFile instead of res.send
res.sendFile(path.join(__dirname, '../public/notes.html'))
})

express.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))

}
)
// Setup the /api/notes post route
// express.post("/api/notes", function(req, res) {
//     // Receives a new note, adds it to db.json, then returns the new note
//     let newNote = req.body;
//     notes.push(newNote);
//     updateDb();
//     return console.log("Added new note: "+newNote.title);
// });

// // Retrieves a note with specific id
// express.get("/api/notes/:id", function(req,res) {
//     // display json for the notes array indices of the provided id
//     res.json(notes[req.params.id]);
// });

// // Deletes a note with specific id
// express.delete("/api/notes/:id", function(req, res) {
//     notes.splice(req.params.id, 1);
//     updateDb();
//     console.log("Deleted note with id "+req.params.id);
// });


module.exports = express;