'use strict';

// only for node.js
function openFile(filename) {
    // if filename exists, open it and return identifier
    // if it doesnt exist, return -1
    // if filename protected, return -2
}

function createFile(filename) {
    // if filename exists, return false
    // if it doesnt exist, create file
}

function writeToFile(str, file) {
    // writes string into file
}

///

function openFile2(filename) {
    // if filename exists, open it and return identifier
    // if it doesnt exist, throw error
}

function createFile2(filename) {
    // if filename exists, throw error
    // if it doesnt exist, create file
}

function writeToFile2(str, file) {
    // writes string into file
}

// goal:
// if "pizda.txt" doesnt exist, create it and write "huy" into it
// if "pizda.txt" exists, write "huy" into it

let file = openFile("pizda.txt");
if (file !== false) {
    writeToFile("huy", file);
} else {
    createFile("pizda.txt");
    file = openFile("pizda.txt");
    writeToFile("huy", file);
}

////////////////////

try {
    let file2 = openFile2("pizda.txt");
} catch (e) {
    createFile2("pizda.txt");
    file = openFile2("pizda.txt");
    writeToFile2("huy", file);
}

let file3 = openFile2("huy2.txt");
let file4 = openFile2("huy1.txt");
