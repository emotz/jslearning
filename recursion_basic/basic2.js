/* jshint -W097 */
/* jshint esversion: 6 */
/* globals console */
'use strict';
function log(msg) { console.log(msg); }
function assert(pred) { log(pred ? "Passed." : "Failed"); }
//////////////////////////////////////////////////

// ряд чисел: 0, 1, 3, ?, ?, ?
// sum(n) = sum(n-1) + n;
// sum(0) = 0

// n = 1
// sum(1) = sum(1-1) + 1 = sum(0) + 1 = 0 + 1 = 1

// n = 2
// sum(2) = sum(2-1) + 2 = sum(1) + 2 = 1 + 2 = 3

// n = 3
// sum(3) = sum(3-1) + 3 = sum(2) + 3 = 3 + 3 = 6

// n = 4 
// ...

function sum(n) {
    console.log("Entering function sum with arg n = " + n);
    let res;
    if (n === 0) 
        res = 0;
    else
        res = n + sum(n - 1);
    console.log("Returning from function sum with arg n = " + n + " with return value " + res);
    return res;
}

assert(sum(3) === 6);

// ряд чисел: 10, 40, 20, 620, ?, ?
// fn(n) = fn(n-1) + 10*fn(n-2) + 20*fn(n-3)
// fn(0) = 10
// fn(1) = 40
// fn(2) = 20

// n = 3
// fn(3) = fn(3-1) + 10*fn(3-2) + 20*fn(3-3) = fn(2) + 10*fn(1) + 20*fn(0) = 20 + 10 * 40 + 20 * 10 = 20 + 400 + 200 = 620

// n = 4
// fn(4) = ...

function fn(n) {
    if (n === 0) return 10;
    if (n === 1) return 40;
    if (n === 2) return 20;

    return fn(n-1) + 10*fn(n-2) + 20*fn(n-3);
}

assert(fn(3) === 620);

// fn2(n) = -1/6 * fn2(n-1)
// fn2(0) = -66