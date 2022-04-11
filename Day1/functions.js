'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}
/*
 * Create the function factorial here
 */

function factorial(n) {
    let a;
    var b =1;
    for(a=1;a<=n;a++) {
      var fact= a*b;
      b=fact;
     
    }
     return fact;   
}
