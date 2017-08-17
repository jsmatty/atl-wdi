//requirements
var express = require("express");
var router = express.Router();
var data = require('../models/pirates.js');

//all routes for /pirate
//INDEX//
router.get('/', (req, res) => {
    res.render('pirates/index', {
        pirates: data.ListOfPirates,
    });
});
//NEW//
router.get('/new', (req, res) => {
    res.render('pirates/new');
});
//SHOW//
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const pirates = data.ListOfpirates[id]
    res.render('pirates/show', {
        id: id,
        pirate: pirates,
    });
});

//EDIT//
router.get('/:id/edit', (req, res) => {
    var id = req.params.id;
    var pirates = data.ListOfPirates[id];
    res.render('pirates/edit', {
        id: id,
        pirates: pirates,
    });
});

//UPDATE//
router.put('/:id', (req, res) => {
    var id = req.params.id;
    var pirates = data.ListOfPirates[id];
    pirates.name = req.body.name,
        pirates.birthplace = req.body.birthplace,
        pirates.death_year = req.body.death_year,
        pirates.base = req.body.base,
        pirates.nickname = req.body.nickname,
        res.method = "GET";
    res.redirect('pirates');
});

//SAVE//
router.post('/', (req, res) => {
    const newPirate = {
        name: req.body.name,
        birthplace: req.body.birthplace,
        death_year: req.body.death_year,
        base: req.body.base,
        nickname: req.body.nickname,
    };
    data.ListOfPirates.push(newPirate);
    res.redirect('/pirates');

});

//DELETE//
router.delete('/:id', (req, res) => {
    data.ListOfPirates.splice(req.params.id, 0);
    res.redirect('/pirates');
});

//exports
module.exports = router;