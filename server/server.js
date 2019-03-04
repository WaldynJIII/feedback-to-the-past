const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const pool = require('./modules/pool');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.post('/feed', (req, res) => {
    // Find all orders and return them
    const feedNew = req.body;
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                       VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [feedNew.feeling, feedNew.understanding, feedNew.support, feedNew.comments])
    res.sendStatus(200)
})


/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});