//requirements
var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

//all routes for /pirate
router.get('/', (req, res) => {
    res.render('pirates/index', {
        pirates: pirates
    });
});
router.get('/new', (req, res) => {
    res.render('pirates/new');
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const pirate = pirates[id]
    res.render('pirates/show', {
        pirate: pirates
    });
});

router.post('/index', (req, res) => {
    const newPirate = {
        name: req.body.name,
        birthplace: req.body.birthplace,
        death_year: req.body.death_year,
        base: req.body.base,
        nickname: req.body.nickname,
    };
    data.push(newPirate);

    res.redirect("/pirates");
});

//exports
module.exports = router;