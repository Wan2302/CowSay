const cowObject = require('./information');
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : "Hello I'm " + cowObject.cowObject.name + " from " + cowObject.cowObject.campus,
    e : "oO",
    T : "U "
}));