/* jshint -W097 */
/* jshint esversion: 6 */
/* globals console */
'use strict';
let logprefix = "global";
function log(msg) {
    let prefix = logprefix === undefined ? "" : logprefix + ": ";
    console.log(prefix + msg);
}

let totalfailed = 0;
let totalpassed = 0;
function assert(pred) {
    if (pred) {
        totalpassed++;
        log("Passed");
    } else {
        totalfailed++;
        log("Failed");
    }
}
/////////// recursion ///////////

//////////////////////////////////////////////////
// сумма с помощью цикла
logprefix = "sum_loop";
function sum_loop(num) {
    let res = 0;
    for (let i = 0; i <= num; ++i) {
        res += i;
    }
    return res;
}

assert(sum_loop(0) === 0);
assert(sum_loop(1) === 1);
assert(sum_loop(2) === 3);
assert(sum_loop(3) === 6);
assert(sum_loop(4) === 10);
assert(sum_loop(5) === 15);

// сумма с помощью рекурсии
logprefix = "sum_rec";
function sum_rec(num) {
    if (num === 0) return 0;
    return num + sum_rec(num - 1);
}

assert(sum_rec(0) === 0);
assert(sum_rec(1) === 1);
assert(sum_rec(2) === 3);
assert(sum_rec(3) === 6);
assert(sum_rec(4) === 10);
assert(sum_rec(5) === 15);

//////////////////////////////////////////////////
// факториал с помощью цикла
logprefix = "fact_loop";
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
logprefix = "fact_rec";
function fact_rec(num) {
    if (num === 0) return 1;
    return num * fact_rec(num - 1);
}

assert(fact_rec(0) === 1);
assert(fact_rec(1) === 1);
assert(fact_rec(2) === 2);
assert(fact_rec(3) === 6);
assert(fact_rec(4) === 24);

//////////////////////////////////////////////////
// реверс строки с помощью цикла
logprefix = "reverse_string_loop";
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
logprefix = "reverse_string_rec";
function reverse_string_rec(str) {
    // WRITE ME
}

assert(reverse_string_rec("hello world") === "dlrow olleh");
assert(reverse_string_rec("HGDfASdF") === "FdSAfDGH");

//////////////////////////////////////////////////
// join массива с разделителем с помощью цикла
logprefix = "join_array_loop";
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
logprefix = "join_array_rec";
function join_array_rec(arr, sep) {
    // WRITE ME
}

assert(join_array_rec(["huy", "dom", "pizda"], "_") === "huy_dom_pizda");
assert(join_array_rec(["huy", "dom", "piz_Da"], "_") === "huy_dom_piz_Da");

//////////////////////////////////////////////////
// реверс массива строк с помощью цикла
logprefix = "reverse_stringarray_loop";
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
logprefix = "reverse_stringarray_rec";
function reverse_stringarray_rec(arr) {
    // WRITE ME
}

assert(reverse_stringarray_rec(["huy", "dom", "pizda"]) === "adzipmodyuh");

//////////////////////////////////////////////////
// поиск симметричных слов/строк с помощью цикла
logprefix = "isSymmetrical_loop";
function isSymmetrical_loop(str) {
    // нормализация входного параметра
    let normalizedstr = "";
    for (let i = 0; i < str.length; ++i) {
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

// поиск симметричных слов/строк с помощью рекурсии
logprefix = "isSymmetrical_rec";
function isSymmetrical_rec(str) {
    // WRITE ME
}

assert(isSymmetrical_rec("") === true);
assert(isSymmetrical_rec("anna") === true);
assert(isSymmetrical_rec("ono") === true);
assert(isSymmetrical_rec("onoo") === false);
assert(isSymmetrical_rec("onn o") === true);

//////////////////////////////////////////////////
// сумма всех чисел в массиве с помощью цикла
logprefix = "sum_arr_loop";
function sum_arr_loop(arr) {
    let i = 0;
    let res = arr[i++];
    while (arr[i] !== undefined) res += arr[i++];
    return res;
}

assert(sum_arr_loop([1, 10, 2]) === 13);
assert(sum_arr_loop("qwer") === "qwer");

// сумма всех чисел в массиве с помощью рекурсии
logprefix = "sum_arr_rec";
function sum_arr_rec(arr) {
    // WRITE ME
}

assert(sum_arr_rec([1, 10, 2]) === 13);
assert(sum_arr_rec("qwer") === "qwer");

//////////////////////////////////////////////////
// поэлементное сравнение двух строк/массивов с помощью цикла
logprefix = "compare_loop";
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
logprefix = "compare_rec";
function compare_rec(first, second) {
    // WRITE ME
}

assert(compare_rec("qwer", "qwer") === true);
assert(compare_rec("qwer", "qwer ") === false);
assert(compare_rec("qwer ", "qwer") === false);
assert(compare_rec([1, 3, 5, 10], [1, 3, 5, 10]) === true);
assert(compare_rec([1, 3, 5, 10], [1, 3, 6, 10]) === false);

//////////////////////////////////////////////////
// лирическое отступление:
//  матрицы это по сути таблицы, записываются в виде массива массивов
//  Например, вот такая матрица (или таблица)
//  _____________
//  | 1 | 2 | 6 |
//  | 6 | 7 | 3 |
//  | 4 | 2 | 5 |
//  | 1 | 1 | 9 |
//  записывается в виде
//   let input = [[1, 2, 6], [6, 7, 3], [4, 2, 5], [1, 1, 9]];
//  Нужно посчитать сумму по строкам, то есть получить такой результат:
//   1 + 2 + 6 = 9
//   6 + 7 + 3 = 16
//   4 + 2 + 5 = 11
//   1 + 1 + 9 = 11
//  То есть сумма этой матрицы по строкам это 
//   let res = [9, 16, 11, 11];
//  
//  Аналогично, сумма по столбцам это:
//  1 + 6 + 4 + 1 = 12
//  2 + 7 + 2 + 1 = 12
//  6 + 3 + 5 + 9 = 23
//   let res = [12, 12, 23];

// сумма строк матрицы с помощью цикла
logprefix = "matrix_sumrows_loop";
function matrix_sumrows_loop(matrix) {
    let res = [];
    for (let i = 0; i < matrix.length; ++i) {
        // reusing `sum_arr_loop` function which we wrote earlier
        res.push(sum_arr_loop(matrix[i]));
    }
    return res;
}

var input = [[1, 2, 6], [6, 7, 3], [4, 2, 5], [1, 1, 9]];
var res = matrix_sumrows_loop(input);
assert(compare_loop(res, [9, 16, 11, 11]));

// сумма строк матрицы с помощью рекурсии
logprefix = "matrix_sumrows_rec";
function matrix_sumrows_rec(matrix) {
    // WRITE ME
    return [];
}

var input = [[1, 2, 6], [6, 7, 3], [4, 2, 5], [1, 1, 9]];
var res = matrix_sumrows_rec(input);
// `compare_loop` is our function which we wrote earlier
assert(compare_loop(res, [9, 16, 11, 11]));

//////////////////////////////////////////////////
// сумма столбцов матрицы с помощью цикла
logprefix = "matrix_sumcols_loop";
function matrix_sumcols_loop(matrix) {
    let res = [];
    let first_row = matrix[0];
    for (let j = 0; j < first_row.length; ++j) {
        res.push(first_row[j]);
    }
    // starting with i = 1 because first row is already processed
    for (let i = 1; i < matrix.length; ++i) {
        for (let k = 0; k < matrix[i].length; ++k) {
            res[k] += matrix[i][k];
        }
    }
    return res;
}

var input = [[1, 2, 6], [6, 7, 3], [4, 2, 5], [1, 1, 9]];
var res = matrix_sumcols_loop(input);
// `compare_loop` is our function which we wrote earlier
assert(compare_loop(res, [12, 12, 23]));

// сумма столбцов матрицы с помощью рекурсии
logprefix = "matrix_sumcols_rec";
function matrix_sumcols_rec(matrix) {
    // WRITE ME
    return [];
}

var input = [[1, 2, 6], [6, 7, 3], [4, 2, 5], [1, 1, 9]];
var res = matrix_sumcols_rec(input);
// `compare_loop` is our function which we wrote earlier
assert(compare_loop(res, [12, 12, 23]));

//////////////////////////////////////////////////
logprefix = undefined;
log("");
log("Total passed: " + totalpassed);
log("Total failed: " + totalfailed);
