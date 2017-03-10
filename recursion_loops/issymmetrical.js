'use strict';
function log(msg) { console.log(msg); }
function assert(pred) { log(pred ? "Passed." : "Failed"); }

function reverse_string(str) {
    let res = "";
    for (let i = str.length - 1; i >= 0; --i) {
        res += str[i];
    }
    return res;
}
//////////////////////////////////////////////////

// поиск симметричных слов/строк с помощью цикла

function isSymmetrical_loop(str) {
    // нормализация входного параметра
    let normalizedstr = "";
    for (let i = 0; i < str.length; ++i) {
        if (str[i] === " ") continue;
        normalizedstr += str[i];
    }

    return normalizedstr === reverse_string(normalizedstr);
}

assert(isSymmetrical_loop("") === true);
assert(isSymmetrical_loop("anna") === true);
assert(isSymmetrical_loop("ono") === true);
assert(isSymmetrical_loop("onoo") === false);
assert(isSymmetrical_loop("onn o") === true);

// поиск симметричных слов/строк с помощью рекурсии

function isSymmetrical_rec(str) {
    // WRITE ME
}

assert(isSymmetrical_rec("") === true);
assert(isSymmetrical_rec("anna") === true);
assert(isSymmetrical_rec("ono") === true);
assert(isSymmetrical_rec("onoo") === false);
assert(isSymmetrical_rec("onn o") === true);
