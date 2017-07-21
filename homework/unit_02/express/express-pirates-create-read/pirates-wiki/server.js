var path = require('path');
var logger = require('morgan');
var express = require('express');
var hbs = require('hbs');
const bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;

var pirateController = require('./controller/pirates');

app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.set("view engine", "hbs");


var pirateController = require('./controllers/pirates.js');
app.use("/pirates", pirateController);

app.get('/', function(req, res) {
    res.send("pirates/index.hbs", {
        pirates: pirates
    });
});
app.get('/new', function(req, res) {
    res.render("pirates/new.hbs");
})
app.post('/show', function(req, res) {
    var newPirate = [{
        name: 'Anne Bonny',
        birthplace: 'Kinsale, Ireland',
        death_year: 1782,
        base: "Caribbean",
        nickname: "none"
    }];

    res.render('pirates/index', {
        pirates: newPirates
    });
});
app.listen(3000, function(req, res) {
    console.log(`Im listening on ${port}`);
});