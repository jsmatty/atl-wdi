const express = require('express');
const hbs = require('hbs');
const app = express();

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

const index = require('./');
app.use('/', index);

const topping = require('/toppings');
app.use('/toppings', toppings);




const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("==========================")
    console.log('LISTENING ON PORT ' + port);
    console.log("==========================")
});