var HashMap = require("hashmap");    // for creating hashmap because searching would become least time consuming

var userList = new HashMap();


userList.set("siddharth@gmail.com","passwordm");   // a static username and password for testing purposes

for(var i = 0 ; i < 10 ; i++){
    userList.set("siddharth"+i+"@gmail.com","passwordm"+i);      // to generate n number of users
}

exports.userList = userList ;