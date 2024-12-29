const express = require('express');
const router = express.Router();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./sqlite_db/kanji.db', sqlite3.OPEN_READONLY)
let sql;

wordSearchSQL = 'SELECT * FROM kanji WHERE jukugo = ?'

router.get('/:word', (req,res) => {
    db.get(wordSearchSQL, [req.params.word], (err, row) => {
        if (err) {
            console.error(err.message)
            res.status(404).send("Word not found")
        }
        //e = row;
        //console.log(e);
        res.json(row);
    })
})


module.exports = router;
