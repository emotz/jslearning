'use strict';

function innerfuntochka() {
    console.log("Starting innerfuntochka");

    let pred = true; // function open file
    if (pred === false) {
        throw "pizda";
    } else {
        console.log("Vse horosho!");
    }

    console.log("Exiting innerfuntochka");
}

function funtochka() {
    console.log("Starting funtochka");

    try {
        innerfuntochka();
    } catch (e) {
        console.log("Caught: " + e);
    }

    console.log("Exiting funtochka");
}

console.log("Before funtochka call");
funtochka();
console.log("After funtochka call");
