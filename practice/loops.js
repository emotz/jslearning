'use strict';
function log(msg) { console.log(msg); }
function assert(pred) { log(pred ? "Passed." : "Failed."); }

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

// написать аналог функции indexOf. Это должна быть функция, принимающая 
//  массив чисел и число в качестве параметров. Она должна найти заданное
//  число в массиве и вернуть его индекс (номер позиции) в массиве. Если
//  заданное значение отсутствует в массиве, вернуть -1

function find_by_value(arr, num) {
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] === num) return i;
    }
    return -1;
}
assert(find_by_value([1, 2, 3], 3) === 2);
assert(find_by_value([1, 2, 3], 4) === -1);
assert(find_by_value([3, 1, 2], 1) === 1);

// написать функцию, которая принимает массив чисел в 
//  качестве аргумента и выводит в консоль каждый второй 
//  элемент входного массива

function even(arr) {
    for (let i = 0; i < arr.length; i += 2) {
        log(arr[i]);
    }
}
even([1, 10, 4, 5, 7]);
even([1, 10, 4, 5, 7, 8]);

// написать функцию, которая принимает массив чисел в качестве 
//  аргумента и возвращает новый массив, содержащий каждый 
//  второй элемент исходного массива

function even_return(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i += 2) {
        res.push(arr[i]);
    }
    return res;
}
assert(compare(even_return([1, 10, 4, 5, 7]), [1, 4, 7]));
assert(compare(even_return([1, 10, 4, 5, 7, 8]), [1, 4, 7]));

// написать функцию, которая принимает числовой массив в качестве
//  аргумента и удваивает каждый элемент массива. Функция не должна
//  ничего возвращать (return). Должен измениться исходный массив.

function double_map_in_place(arr) {
    for (let i = 0; i < arr.length; ++i) {
        arr[i] *= 2;        
    }
}
let double_map_test_arr = [1, 5, 10, -10];
double_map_in_place(double_map_test_arr);
assert(compare(double_map_test_arr, [2, 10, 20, -20]));

// написать функцию, которая принимает числовой массив в качестве аргумента
//  и удваивает каждый элемент массива. Функция должна вернуть новый массив,
//  содержащий требуемые значения. Исходный массив должен остаться неизменным.

function double_map_return(arr) {
    let res = [];
    for (let i = 0; i < arr.length; ++i) {
        res.push(arr[i]*2);
    }
    return res;
}
let double_map_test_arr2 = [1, 5, 10, -10];
let double_map_test_res = double_map_return(double_map_test_arr2);
assert(compare(double_map_test_arr2, [1, 5, 10, -10]));
assert(compare(double_map_test_res, [2, 10, 20, -20]));

// написать функцию, которая принимает число в качестве аргумента и 
//  проверяет, является ли оно простым. Если является, возвращает true. 
//  Если не является, возвращает false. (Простые числа - это числа,
//  которые не делятся без остатка ни на одно число кроме единицы и самого себя)

function is_simple(num) {
    for (let i = 2; i < num; ++i) {
        if (num % i === 0) return false;
    }
    return true;
}
assert(is_simple(7) === true);
assert(is_simple(6) === false);
assert(is_simple(13) === true);
assert(is_simple(14) === false);

// написать функцию, которая принимает число в качестве аргумента и 
//  считает, сколько раз это число можно поделить пополам прежде чем
//  оно станет меньше единицы. Например, для числа 3 результат выполнения
//  функции должен быть равен числу 2, для чисда 5 - числу 3, для 
//  числа 8 - числу 4, для числа 9 - тоже числу 4.

function divide_by_two(num) {
    let i = 0;
    while (num >= 1) {
        num /= 2;
        ++i;
    }
    return i;
}
assert(divide_by_two(3) === 2);
assert(divide_by_two(5) === 3);
assert(divide_by_two(8) === 4);
assert(divide_by_two(9) === 4);

// написать функцию (противоположность join'у), которая принимает
//  строку и букву в качестве аргументов. Буквенный аргумент 
//  назовем разделителем. Функция должна разбить исходную строку
//  на несколько строк по разделителю и вернуть массив, состоящий 
//  из этих строк. Например, для строки "123$asdf$45bb" и 
//  разделителя "$" функция должна вернуть массив ["123", "asdf", "45bb"]

function split(str, letter) {
    let res = [];
    let j = 0;
    res[j] = [];
    for (let i = 0; i < str.length; ++i) {
        if (str[i] === letter) {
            res[++j] = "";
        } else {
            res[j] += str[i];
        }
    }
    return res;
}
assert(compare(split("123$asdf$45bb", '$'), ["123", "asdf", "45bb"]));
