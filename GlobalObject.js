console.log('argv Num of Parameter : ' + process.argv.length);
console.dir(process.argv);
// process.argv = Array /
// object.method.*forEach(Funtion(item, index){}) => index : item 
process.argv.forEach(function(item, index){
    console.log(index + ' : ' + item);
});



