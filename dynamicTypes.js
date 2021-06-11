"use strict";

// To string (превращаем данные в строку) 

// 1)

console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2) С помощью конкатенации

console.log(typeof(5 + ''));

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + "px";

// To Number

// 1) Обычно не используется изза неудобности

console.log(typeof(Number('4')));

// 2) Унарный плюс

console.log(typeof(+'4'));

// 3)

console.log(typeof(parseInt('15px', 10)));

let answer = +prompt("Сколько вам лет?");

// To boolean

// 1)

// 0, "", null, undefined, NaN

let switcher = null;

if (switcher) {
    console.log("working");
}



