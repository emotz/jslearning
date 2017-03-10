'use strict';

let data = '{"name":"Вася", "age" 30}'; // строка с данными, полученная с сервера
// невалидный json

try {
    let user = JSON.parse(data); // преобразовали строку в объект
} catch (e) {
    console.log("Oshibka: " + e);
}

console.log("HUY");

// теперь user -- это JS-объект с данными из строки
// alert( user.name ); // Вася
// alert( user.age ); // 30