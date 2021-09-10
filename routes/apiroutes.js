const fs = require('fs');
const path= require ('path');
const express = require('express').Router();
let dbfile = require('../db/db.json');

express.get('/notes', (req, res) => {
    dbfile = JSON.parse(fs.readFileSync('db/db.json', "utf-8"))

    // to read db.json file and return saved notes
    
    res.json(dbfile);
    
})





module.exports = express;