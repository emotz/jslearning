/* jshint -W097 */
/* jshint esversion: 6 */
/* globals console */
'use strict';
function log(msg) { console.log(msg); }
function assert(pred) { log(pred ? "Passed." : "Failed"); }
//////////////////////////////////////////////////

// реверс массива строк с помощью цикла

function reverse_stringarray_loop(arr) {
    let res = "";
    for (let i = arr.length - 1; i >= 0; --i) {
        let current_str = arr[i];
        for (let j = current_str.length - 1; j >= 0; --j) {
            res += current_str[j];
        }
    }
    return res;
}

assert(reverse_stringarray_loop(["huy", "dom", "pizda"]) === "adzipmodyuh");

// реверс массива строк с помощью рекурсии

function reverse_stringarray_rec(arr) {
    // WRITE ME
}

assert(reverse_stringarray_rec(["huy", "dom", "pizda"]) === "adzipmodyuh");
