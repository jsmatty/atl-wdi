//using strict mode
'use strict';
// it allows node ro parse a file and its text vales
const fs = require('fs');
console.log(process.argv)
    //gisves us the argument we are writing
let inFile = process.argv[2];



let readTheFilePromise = new Promise(function(resolve, reject) {
    fs.readFile(inFile, { encoding: 'utf8' }, function(error, content) {
        resolve(content);
        reject("line 28 error ", error);
    });
});
//The value passed to resolve will be the argument 
//passed to the resolution handler you register by calling the promise's then method.
readTheFilePromise.then(function(result) {
        return result;
    })
    .then(function(result) {
        let lines = result.split('\n');
        return lines;
    })
    //each (then/catch) take one argument, a function
    .then(function(lines) {
        lines.pop();
        return lines;
    })
    .then(function(lines) {
        lines.forEach(function(line) {
            console.log('Hello, ' + line + '!');
        });
    })

//the value passed to reject and the rejection handler 
//registered by calling the promise's (or a chained promise's) 
//catch method.
.catcg(err => {
    console.log("there was an error!");
    console.log(err);
});
// .catch(function(error) {
//     console.log("an error occured line 49", error);
// });