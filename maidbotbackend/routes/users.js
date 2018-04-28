var express = require('express');
var router = express.Router();
var passport = require('passport');
require('./passport')(passport);
/* GET users listing. */

router.get('/login', function(req, res, next) {
    // a get request for validating user's login credentials

    passport.authenticate('login', function(err, user) {
        if (err) {
            throw err;
        }
        if(!user){
            res.send({status:401});    // no message for not validated user
        }
        else if(user){
             req.session.username = user.username;
             req.session.isloggedin = true;
            res.send({status:201});  // 201 status code for everything right and setting the session
        }
    })(req,res);
});


router.get('/check',function (req,res) {

    if(req.session.isloggedin){
        var user = req.session.username.split('@');
        res.send({username:user[0],status:200,message:'Welcome to maidbot'});
    }
    else {
        res.send({status:403});
    }

});


router.post('/logout', function (req,res) {
    console.log("inside post ");
    req.session.destroy();
    res.status(201).send();

})

// can have multiple requests with various paths

module.exports = router;
