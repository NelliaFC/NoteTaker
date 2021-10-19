const fs = require('fs');
const path= require ('path');
const express = require('express').Router();
let dbfile = require('../db/db.json');

express.get('/notes', (req, res) => {
    dbfile = JSON.parse(fs.readFileSync('db/db.json', "utf-8"))

    // to read db.json file and return saved notes
    
    res.json(dbfile);
    
})

express.post('/notes', (req, res) => {
    let dbfileTemplate = {
        title: req.body.title,
        text: req.body.text,
        id: Math.floor(Math.random()*1000000)
    }

    dbfile.push(dbfileTemplate);
   // console.log (dbfile)
    fs.writeFileSync('db/db.json', JSON.stringify(dbfile))
    res.json(dbfile)
})

express.get('/notes/:id', (req, res) => {
    
})
// Setup the /api/notes post route
// express.post("/api/notes", function(req, res) {
//     // Receives a new note, adds it to db.json, then returns the new note
//     let newNote = req.body;
//     notes.push(newNote);
//     updateDb();
//     return console.log("Added new note: "+newNote.title);
// });

// Retrieves a note with specific id
express.get("/notes/:id", function(req,res) {
    // display json for the notes array indices of the provided id
    res.json(notes[req.params.id]);
});

// Deletes a note with specific id
express.delete("/notes/:id", function(req, res) {
    dbfile.splice(req.params.id, 1);
    fs.writeFileSync('db/db.json', JSON.stringify(dbfile))
    res.json(dbfile)
  
    console.log("Deleted note with id "+req.params.id);
});






module.exports = express;