// https://www.codewars.com/kata/5270f22f862516c686000161/train/javascript

let base64index = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/'];

//Extend the String object with toBase64() and fromBase64() functions
String.prototype.toBase64 = function () {
    /** @type {String} */
    let str = this;
    let len = (3 - (str.length % 3)) % 3 + str.length;
    let bits = new Array(len);
    let i = 0;
    for (; i < str.length; ++i) {
        let s = str.charCodeAt(i).toString(2);
        bits[i] = '00000000'.slice(0, 8 - s.length) + s;
    }
    for (; i < len; ++i) {
        bits[i] = '00';
    }
    let added = len - str.length;
    bitstream = bits.join('');
    let res = new Array(bitstream.length / 6 + added);
    for (i = 0; i < bitstream.length; i += 6) {
        let numbitstr = Array.prototype.slice.call(bitstream, i, i + 6).join('');
        let num = parseInt(numbitstr, 2);
        res[i / 6] = base64index[num];
    }
    for (i /= 6; i < res.length; ++i) {
        res[i] = '=';
    }
    return res.join('');
};

String.prototype.fromBase64 = function () {
    /** @type {String} */
    let str = this;

    return str
        .split('')
        .filter(c => c !== '=')
        .map(c => base64index.indexOf(c))
        .map(num => num.toString(2))
        .map(s => '000000'.slice(0, 6 - s.length) + s)
        .join('')
        .match(/.{8}/g)
        .map(s => parseInt(s, 2))
        .map(charcode => String.fromCharCode(charcode))
        .join('');
};

let assert = require('assert');
assert("Man".toBase64() === 'TWFu');
assert('z'.toBase64() === 'eg==');
assert('eg=='.fromBase64() === 'z');
assert("Man".toBase64().fromBase64() === 'Man');
