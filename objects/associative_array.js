/* jshint -W069 */
'use strict';

let arr = ["qwer", "asdf", "zxcv"];
console.log(arr[0]);
console.log(arr[1]);

let pochta = ["huynya", "playboy", "kvitancia"];
console.log(pochta[0]);

let pochta_v_shkole = {};
pochta_v_shkole[101] = "huynya";
pochta_v_shkole[102] = "playboy";
pochta_v_shkole[103] = "kvitancia";
pochta_v_shkole["104"] = "eshe huynya";
console.log(pochta_v_shkole);
console.log(pochta_v_shkole[104+101]);
let q = {
    '101': "huynya",
    "102": "playboy",
    103: "kvitancia"
};
q["huy"] = "asdf";
console.log(q["huy"] === q.huy);
// q["101"] === q.101 // не работает с числами!
console.log(q.huy);
