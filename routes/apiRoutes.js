var router = require('express').Router();
var connection = require('../database/connection');

router.get("/api/getnotes", function (req, res) {
    connection.query("SELECT * FROM notes", function (err, result) {
        if (err) throw err;
        res.send(result)
    })
})

router.post("/api/submit", function (req, res) {
    var sqlStr = `INSERT INTO notes (title, body)
                  VALUES (?, ?)`
    var data = [req.body.name, req.body.body];

    connection.query(sqlStr, data, function(err, result){
        if(err) throw err;
        res.redirect("/notes")
    })
    console.log(req.body);
})

module.exports = router;