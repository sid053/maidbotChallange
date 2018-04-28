//var passport = require('passport');
var LocalStrategy = require("passport-local").Strategy;
var userList = require('../public/userList');
userList = userList.userList ;
module.exports = function(passport) {
    passport.use('login', new LocalStrategy( function(username, password, done) {
                        //its by default username and password but can be changed

             if(username.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
             	
            if(password===userList.get(username)){
                done(null,{username:username , password:password});
            }
            else{
                done(null,false);
            }
			}
			else{
				done(null,false);
			}
        }));
};


