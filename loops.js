/* jshint -W097 */
/* globals console */
'use strict';
function assert(pred) {console.log(pred ? "Ok" : "Not ok!!!!!");}

//////////////////////////////////////////////////
// реверс строки
var input = "hello world";
var res;

// (подсказка: реверс строки - это то же самое, что посимвольное копирование, только в обратном порядке)
res = "";
for (var i = input.length - 1; i >= 0; --i) {
    res += input[i];
}

assert(res === "dlrow olleh");

//////////////////////////////////////////////////
// реверс строки в виде функции
function reverse_string_loop(str) {
    var res = "";
    for (var i = str.length - 1; i >= 0; --i) {
        res += str[i];
    }
    return res;
}

var input = "hello world";
var res = reverse_string_loop(input);
assert(res === "dlrow olleh");

//////////////////////////////////////////////////
// join массива с разделителем
var input = ["huy", "dom", "pizda"];
var separator = "_";
var res;

res = "";
for (var i = 0; i < input.length; ++i) {
    res += input[i];
    if (i < input.length - 1) res += separator;
}

assert(res === "huy_dom_pizda");

//////////////////////////////////////////////////
// join массива с разделителем в виде функции
function join_array_loop(arr, sep) {
    var res = "";
    for (var i = 0; i < arr.length; ++i) {
        res += arr[i];
        if (i < arr.length - 1) res += sep;
    }
    return res;
}

var input = ["huy", "dom", "pizda"];
var separator = "_";
var res = join_array_loop(input, separator);

assert(res === "huy_dom_pizda");

//////////////////////////////////////////////////
// реверс массива строк
var input = ["huy", "dom", "pizda"];
var res;

// (подсказка: нужно использовать loop в loope)
res = "";
for (var i = input.length-1; i >= 0; --i) {
    var current_str = input[i];
    for (var j = current_str.length - 1; j >= 0; --j) {
        res += current_str[j];
    }
}

assert(res === "adzipmodyuh");

//////////////////////////////////////////////////
// реверс массива строк в виде функции
function reverse_stringarray_loop(arr) {
    var res = "";
    for (var i = arr.length-1; i >= 0; --i) {
        var current_str = arr[i];
        for (var j = current_str.length - 1; j >= 0; --j) {
            res += current_str[j];
        }
    }
    return res;
}

var input = ["huy", "dom", "pizda"];
var res = reverse_stringarray_loop(input);

assert(res === "adzipmodyuh");

//////////////////////////////////////////////////
// поиск симметричных слов/строк
function isSymmetrical_loop(str) {
    // нормализация входного параметра
    var normalizedstr = "";
    for (var i = 0; i < str.length; ++i) {
        if (str[i] === " ") continue;
        normalizedstr += str[i];
    }

    return normalizedstr === reverse_string_loop(normalizedstr);
}

assert(isSymmetrical_loop("") === true);
assert(isSymmetrical_loop("anna") === true);
assert(isSymmetrical_loop("ono") === true);
assert(isSymmetrical_loop("onoo") === false);
assert(isSymmetrical_loop("onn o") === true);

//////////////////////////////////////////////////
// сумма всех чисел в массиве
function sum_arr_loop(arr) {
    var i = 0;
    var res = arr[i++];
    while (arr[i] !== undefined) res += arr[i++];
    return res;
}

assert(sum_arr_loop([1, 10, 2]) === 13);
assert(sum_arr_loop("qwer") === "qwer");

//////////////////////////////////////////////////
// поэлементное сравнение двух строк/массивов
function compare_loop(first, second) {
    // if lengths are different, no need to compare anything
    if (first.length !== second.length) return false;
    // now we are sure both inputs have same length
    var length = first.length;

    var i = -1;
    while (++i < length && first[i] === second[i]);
    return i === length;
}

assert(compare_loop("qwer", "qwer") === true);
assert(compare_loop("qwer", "qwer ") === false);
assert(compare_loop("qwer ", "qwer") === false);
assert(compare_loop([1, 3, 5, 10], [1, 3, 5, 10]) === true);
assert(compare_loop([1, 3, 5, 10], [1, 3, 6, 10]) === false);
