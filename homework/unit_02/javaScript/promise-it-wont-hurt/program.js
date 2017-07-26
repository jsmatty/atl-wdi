'use strict';

const fs = require('fs');

const readFilePromise = new Promise((resolve, reject) => {
    fs.readFile(inFile, { encoding: 'utf8' }, (err, content) => {
        if (err) {
            reject(err);
        }
        resolve(content);
    });
});

readFilePromise
    .then(data => data.split('\n'))
    .then(lines => {
        lines.pop()
        lines.forEach(function(line) {
            console.log('Hello, ' + line + '!');
        });
    })
    .catch(err => {
        console.log("There was an error!");
        console.log(err);
    });