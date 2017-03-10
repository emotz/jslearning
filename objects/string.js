/* jshint -W069 */
'use strict';
function log(msg) { console.log(msg); }
function assert(pred) { log(pred ? "Passed." : "Failed"); }
//////////////////////////////////////////////////

// подсчет букв в строке

function count_letter(str) {
    var letters = "qwertyuiopasdfghjklzxcvbnm";
    var res = {};
    for (var i = 0; i < letters.length; i++) {
        res[letters[i]] = 0;
    }
    for (let i = 0; i < str.length; ++i) {
        res[str[i]] += 1;
    }
    return res;
}

let res = count_letter("hello world");
assert(res["h"] === 1);
assert(res["l"] === 3);
assert(res['o'] === 2);
assert(res['z'] === 0);
