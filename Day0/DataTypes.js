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


function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;
    let in_sum;
    in_sum = firstInteger + Number(secondInteger);
    
    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    console.log(in_sum);
    const firstDecimal = 4.0;
let d_sum;
d_sum = firstDecimal + Number(secondDecimal);
   console.log(d_sum);
    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';
    let st_sum;
    st_sum = firstString +(secondString);
    console.log(st_sum);



    
}


function main() {
    const secondInteger = readLine();
    const secondDecimal = readLine();
    const secondString = readLine();
    
    performOperation(secondInteger, secondDecimal, secondString);
}

/*
Sample INput
12
4.32
is the best place to learn and practice coding!

Sample output
16
8.32
HackerRank is the best place to learn and practice coding!
