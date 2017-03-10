'use strict';
function log(msg) { console.log(msg); }
function assert(pred) { log(pred ? "Passed." : "Failed"); }
//////////////////////////////////////////////////

// сумма всех чисел в массиве с помощью цикла

function sum_arr_loop(arr) {
    let i = 0;
    let res = arr[i++];
    while (arr[i] !== undefined) res += arr[i++];
    return res;
}

assert(sum_arr_loop([1, 10, 2]) === 13);
assert(sum_arr_loop("qwer") === "qwer");

// сумма всех чисел в массиве с помощью рекурсии

function sum_arr_rec(arr) {
    // WRITE ME
}

assert(sum_arr_rec([1, 10, 2]) === 13);
assert(sum_arr_rec("qwer") === "qwer");
