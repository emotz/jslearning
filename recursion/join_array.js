/* jshint -W097 */
/* jshint esversion: 6 */
/* globals console */
'use strict';
function log(msg) { console.log(msg); }
function assert(pred) { log(pred ? "Passed." : "Failed"); }
//////////////////////////////////////////////////

// join массива с разделителем с помощью цикла

function join_array_loop(arr, sep) {
    let res = "";
    for (let i = 0; i < arr.length; ++i) {
        res += arr[i];
        if (i < arr.length - 1) res += sep;
    }
    return res;
}

assert(join_array_loop(["huy", "dom", "pizda"], "_") === "huy_dom_pizda");
assert(join_array_loop(["huy", "dom", "piz_Da"], "_") === "huy_dom_piz_Da");

// join массива с разделителем с помощью рекурсии

function join_array_rec(arr, sep) {
    // WRITE ME
}

assert(join_array_rec(["huy", "dom", "pizda"], "_") === "huy_dom_pizda");
assert(join_array_rec(["huy", "dom", "piz_Da"], "_") === "huy_dom_piz_Da");
