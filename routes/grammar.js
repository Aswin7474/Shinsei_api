const express = require('express');
const router = express.Router();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./sqlite_db/grammar.db', sqlite3.OPEN_READONLY);

examplesSQL = 'SELECT * FROM examples WHERE grammar_point = ?'
grammarSQL = 'SELECT * FROM defn_eg WHERE grammar_point = ? LIMIT 1'


router.get('/:grammar', (req, res) => {
    db.get(grammarSQL, [req.params.grammar], (err, row) => {
        if (err) {
            console.error(err.message);
            res.status(404).send("Grammar not found");
        }
        //console.log(row)
        res.status(200).json(row);
    })
})

router.get('/:grammar/examples', (req, res) => {
    db.all(examplesSQL, [req.params.grammar], (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(404).send("Grammar not found");
        }

        // console.log(rows);
        res.status(200).json(rows);
    })
})

module.exports = router;
