var express = require('express');
var router = express.Router();

var User = require("../models/user");
var Item = require("../models/item");

// USERS INDEX ROUTE

//using terminal node db/seeds.js to check for users in the database//
//call find method on user model//returns a promise
router.get('/', (request, response) => {
        User.find({})
            .then((users) => {
                console.log(users)
                response.render('users/index', {
                    users: users
                });
            })
            .catch((error) => {
                console.log(`ERROR ${error}!`)
            });
    })
    // USER CREATE FORM
router.get('/new', (request, response) => {
    response.render('users/new', {

    });
});
// USER CREATE ROUTE
router.post('/', (request, response) => {

    const newUser = new User(request.body)

    newUser.save().then((newUser) => {
        response.render('users/show', {
            user: newUser
        });
    })

})

.catch((error) => {
    if (error) {
        console.log('Error saving new user to the database! ' + error)
    };
})

// USER SHOW ROUTE
router.get('/:id', (request, response) => {

    const userIdToSearchDbFor = request.param.id;

    User.findById(userIdToSearchDbFor)
        .then((user) => {
            response.render('users/show', {
                user: user
            });
        })
});

// USER UPDATE ROUTE

// USER DESTROY
router.delete('/:id/delete', (request, response) => {

    const userIdToDelete = request.params.id;

    User.findByIdAndRemove(userIdToDelete)
        .then(() => {
            response.redirect('/user', {

            })
        })

});

// USER UPDATE ROUTE

// router.get('/:id/edit',(req, res) => {
//   const userIdToFind = request.params.id;

//   User.findById()
// })
// ADD A NEW ITEM

// REMOVE AN ITEM

module.exports = router;