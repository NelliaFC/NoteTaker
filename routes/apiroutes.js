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
    console.log (dbfile)
    fs.writeFile('db/db.json')
})




module.exports = express;