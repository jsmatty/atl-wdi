// /////every file has to require package////
// const express = require('express');
// //const = constant
// const app = express();
// //=> replaces when you have a callback function//
// app.get('/', (req, res) => {
//     // console.log(req.route);
//     // console.log(req.query);
//     // console.log(req.params);

//     //console.log(res);
//     res.redirect('/greeting');
// });
// //req = request//
// //res = response//

// app.get('/greeting', (request, response) => {
//     response.send('Hey WDI 11!');
// });
// //const port = process.env.PORT || 3000;
// //create var PORT.   if process.env.PORT doesnt exist it will be undefined//
// //app.listen should be at the end and only used ONCE.// listening with for all of the different requests you have written above.

// app.get('/rihanna', (req, res) => {
//     res.send('WORK WORK WORK WORK');
// });
// app.get('/sightings', (req, res) => {
//     console.log(req.query);
//     res.send('how many ufo sightings you think there are in that state $(req.query.state)? $(req.query.sights)');

// });

// app.get("/:name", (req, res) => {
//     if (req.query.human) {
//         res.send(`Hello, ${req.params.name}`);
//     } else {
//         res.send('Hello, smart toaster');
//     }

// });


// app.get('/users/:user_id/friends/:friends_id', (req, res) => {
//     res.send(`Hello User #:${req.params.user_id}. Your friend is User #:
//    ${req.params.friend_id}`);

// });

// // app.get('/math/add', (req, res) => {
// //     var num1 = parseInt(req.query.num1);
// //     var num2 = parseInt(req.query.num2);
// //     var sum = num1 + num2;
//  res.send(`${sum}`);
// // });

// // app.get('/math/subtract', (req, res) => {

// // })

// app.get('/math/:operator', (req, res) => {
//     if (req.params.operator === 'add') {
//         var sum = num1 + num2;
//         res.send(`${sum}`);
//     } else if
// });




// //const express = require('express');
// const port = process.env.PORT || 3000; //const port = 3000;
// //short:  app.listen(3000); // constructor
// app.listen(port, () => {
//     console.log("hello-express is running on port " + port);
// });

const express = require('express');
const app = express();
const hbs = require('hbs');
app.set("view engine", "hbs"); //tells Express what to use for rendering templates
//current directory
app.use(express.static(__dirname + '/public'));

app.get('/greeting', (request, response) => {
    //render the file called 'greeting'
    //
    response.render('greeting', {
        //data = to VV
        saying: request.query.saying,
        userName: request.query.name,
    });
});
app.get('/favorite-foods', function(req, res) {
    const favoriteFoods = ["Jeni's almond butter brittle ice cream", 'Tacos from Superica', 'a breakfast sandwich from Gjelina to go in Venice', 'Croissants from Bottega Louie in downtown Los Angeles', 'Pizza from Little Star in San Francisco'];

    res.render('favorite-foods', {
        data: favoriteFoods
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});