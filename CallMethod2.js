var calc2 = require('./Cal2');
console.log(calc2.add(10,20));

var nconf = require('nconf');
var value = nconf.get('OS');
console.log('OS : ' + value);