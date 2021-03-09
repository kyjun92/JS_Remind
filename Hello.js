console.log('Hello World!');

console.log('Number : %d', 10);
console.log('String : %s', "I'm YoungGu");

var person = {
    name : 'YoungJun',
    age : 30
}

console.log('json : %j', person);

console.dir(person);

console.time('duration_time');

var result = 0;
for(var i = 0; i < 100000; i++){
    result += i;
}

console.log(result);
console.timeEnd('duration_time');

console.log(__filename);
console.log(__dirname);