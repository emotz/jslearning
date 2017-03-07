/* jshint -W097 */
/* jshint esversion: 6 */
/* globals console */
'use strict';
function log(msg) { console.log(msg); }
function assert(pred) { log(pred ? "Passed." : "Failed"); }
//////////////////////////////////////////////////

function sum(n) {
    if (n === 0) return 0;
    return n + sum(n - 1);
}

////////

function sum0() { // сумма от 0 до нуля
    return 0;
}

function sum1() { // сумма от 0 до единицы
    return 1 + sum0();
}

function sum2() { // сумма от 0 до двух
    return 2 + sum1(); 
}

function sum3() { // сумма от 0 до трех
    return 3 + sum2();
}

let q = sum3();
console.log("q = " + q);
assert(sum(1) === sum1());
assert(sum(2) === sum2());
assert(sum(3) === sum3());
