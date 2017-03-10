'use strict';
function log(msg) { console.log(msg); }
function assert(pred) { log(pred ? "Passed." : "Failed"); }
//////////////////////////////////////////////////

// факториал с помощью цикла

function fact_loop(num) {
    let res = 1;
    for (let i = 1; i <= num; ++i) {
        res *= i;
    }
    return res;
}

assert(fact_loop(0) === 1);
assert(fact_loop(1) === 1);
assert(fact_loop(2) === 2);
assert(fact_loop(3) === 6);
assert(fact_loop(4) === 24);

// факториал с помощью рекурсии

function fact_rec(num) {
    if (num === 0) return 1;
    return num * fact_rec(num - 1);
}

assert(fact_rec(0) === 1);
assert(fact_rec(1) === 1);
assert(fact_rec(2) === 2);
assert(fact_rec(3) === 6);
assert(fact_rec(4) === 24);
