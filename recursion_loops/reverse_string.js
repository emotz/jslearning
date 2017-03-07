/* jshint -W097 */
/* jshint esversion: 6 */
/* globals console */
'use strict';
function log(msg) { console.log(msg); }
function assert(pred) { log(pred ? "Passed." : "Failed"); }
//////////////////////////////////////////////////

// реверс строки с помощью цикла

function reverse_string_loop(str) {
    let res = "";
    for (let i = str.length - 1; i >= 0; --i) {
        res += str[i];
    }
    return res;
}

assert(reverse_string_loop("hello world") === "dlrow olleh");
assert(reverse_string_loop("HGDfASdF") === "FdSAfDGH");

// реверс строки с помощью рекурсии

function reverse_string_rec(str) {
    // WRITE ME
}

assert(reverse_string_rec("hello world") === "dlrow olleh");
assert(reverse_string_rec("HGDfASdF") === "FdSAfDGH");
