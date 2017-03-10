'use strict';
function log(msg) { console.log(msg); }
function assert(pred) { log(pred ? "Passed." : "Failed."); }
//////////////////////////////////////////////////

// поэлементное сравнение двух строк/массивов с помощью цикла

function compare_loop(first, second) {
    // if lengths are different, no need to compare anything
    if (first.length !== second.length) return false;
    // now we are sure both inputs have same length
    let length = first.length;

    let i = -1;
    while (++i < length && first[i] === second[i]);
    return i === length;
}

assert(compare_loop("qwer", "qwer") === true);
assert(compare_loop("qwer", "qwer ") === false);
assert(compare_loop("qwer ", "qwer") === false);
assert(compare_loop([1, 3, 5, 10], [1, 3, 5, 10]) === true);
assert(compare_loop([1, 3, 5, 10], [1, 3, 6, 10]) === false);

// поэлементное сравнение двух строк/массивов с помощью рекурсии

function compare_rec(first, second) {
    // WRITE ME
}

assert(compare_rec("qwer", "qwer") === true);
assert(compare_rec("qwer", "qwer ") === false);
assert(compare_rec("qwer ", "qwer") === false);
assert(compare_rec([1, 3, 5, 10], [1, 3, 5, 10]) === true);
assert(compare_rec([1, 3, 5, 10], [1, 3, 6, 10]) === false);
