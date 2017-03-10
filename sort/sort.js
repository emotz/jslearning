'use strict';
function log(msg) { console.log(msg); }
function assert(pred) { log(pred ? "Passed." : "Failed"); }

function compare(first, second) {
    // if lengths are different, no need to compare anything
    if (first.length !== second.length) return false;
    // now we are sure both inputs have same length
    let length = first.length;

    let i = -1;
    while (++i < length && first[i] === second[i]);
    return i === length;
}
//////////////////////////////////////////////////

// поменять местами значения двух переменных
let a = 10;
let b = "asdf";

// WRITE ME

assert(a === "asdf");
assert(b === 10);

//////////////////////////////////////////////////

// сортировка массива "пузырьком"
function sort_bubble(arr) {
    // WRITE ME
    return [];
}

assert(compare(sort_bubble([1, 2, 3]), [1, 2, 3]));
assert(compare(sort_bubble([3, 2, 1]), [1, 2, 3]));
assert(compare(sort_bubble([10, 0, 15, 6, 8]), [0, 6, 8, 10, 15]));

//////////////////////////////////////////////////

// сортировка массива "quicksort"
function sort_quick(arr) {
    // WRITE ME
    return [];
}

assert(compare(sort_quick([1, 2, 3]), [1, 2, 3]));
assert(compare(sort_quick([3, 2, 1]), [1, 2, 3]));
assert(compare(sort_quick([10, 0, 15, 6, 8]), [0, 6, 8, 10, 15]));
