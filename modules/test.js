'use strict';

function greet_from_another_module(name) {
    const another_module = require("./another_module.js");
    another_module.test_func();
}

greet_from_another_module("qwer");
