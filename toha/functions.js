'use strict';
function log(msg) { console.log(msg); }
function assert(pred) { log(pred ? "Passed." : "Failed."); }
//////////////////////////////////////////////////

// написать функцию, которая принимает строку в качестве параметра и выводит в консоль эту строку, окруженную одинарными кавычками
function single_quote(str) {
    log("'" + str + "'");
}
single_quote("gggg");

// написать функцию, которая принимает строку в качестве параметра и выводит в консоль эту строку, окруженную двойными кавычками
function double_quote(str) {
    log('"' + str + '"');
}
double_quote("gggg");

// написать функцию, которая принимает две строки в качестве параметров и выводит их в консоль, разделенными символом #
function hash_joiner(str1, str2) {
    log(str1 + '#' + str2);
}
hash_joiner("asdf", " gghjhj");

// написать функцию, которая принимает строку, число и строку в качестве параметров и выводит вторую строку, за которой следует первая строка, повторённая несколько раз (число повторений должно быть равно числовому аргументу)
function repeater(str1, num, str2) {
    let res = str2;
    for (let i = 0; i < num; ++i) {
        res += str1;
    }
    log(res);
}
repeater("qwer", 3, "ggg");

// для каждой из вышеперечисленных функций написать альтернативный вариант, который заключается в следующем: вместо вывода текста в консоль, функция должно вернуть (return) строку, идентичную тексту, выводимому оригинальным вариантом функции(edited)
function single_quote_return(str) {
    return "'" + str + "'";
}
assert(single_quote_return("123") === "'123'");
assert(single_quote_return("") === "''");

function double_quote_return(str) {
    return '"' + str + '"';
}
assert(double_quote_return("123") === '"123"');
assert(double_quote_return("") === '""');

function hash_joiner_return(str1, str2) {
    return str1 + '#' + str2;
}
assert(hash_joiner_return("qwer", "asdf") === "qwer#asdf");
assert(hash_joiner_return("qwer", "") === "qwer#");

function repeater_return(str1, num, str2) {
    let res = str2;
    for (let i = 0; i < num; ++i) {
        res += str1;
    }
    return res;
}
assert(repeater_return("hello", 4, "world") === "worldhellohellohellohello");
