/* jshint -W097 */
/* jshint esversion: 6 */
/* globals console */
'use strict';
function log(msg) { console.log(msg); }
function assert(pred) { log(pred ? "Passed." : "Failed"); }
//////////////////////////////////////////////////

// сумма с помощью цикла

function sum_loop(num) {
    let res = 0;
    for (let i = 0; i <= num; ++i) {
        res += i;
    }
    return res;
}

assert(sum_loop(0) === 0);
assert(sum_loop(1) === 1);
assert(sum_loop(2) === 3);
assert(sum_loop(3) === 6);
assert(sum_loop(4) === 10);
assert(sum_loop(5) === 15);

// сумма с помощью рекурсии

function sum_rec(num) {
    if (num === 0) return 0;
    return num + sum_rec(num - 1);
}

assert(sum_rec(0) === 0);
assert(sum_rec(1) === 1);
assert(sum_rec(2) === 3);
assert(sum_rec(3) === 6);
assert(sum_rec(4) === 10);
assert(sum_rec(5) === 15);
