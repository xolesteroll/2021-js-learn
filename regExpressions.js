'use strict';

// Регулярное выражение состоит из дувух частей:
// 1) Паттерн (шаблон)
// 2) Флаги

// new RegExp('pattern', 'flags'); // Этим никто не пользуется

// /pattern/flag

// const ans = prompt('Введите ваше имя');

// const reg = /\d/g;

// ФлАги

// i - когда хотим что то найти вне зависимости от регистра

// g - когда вытаемся найти сразу нелсколько вхождений (не сработает с методом search)

// m - включает многострочный режим


// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('Password');

// console.log(pass.replace(/\./g, '*'));

// console.log('12-34-56'.replace(/-/g, ':'));

// console.log((ans.match(reg).join('')));

// Классы 
// \d - digits ищем все цифры
// \D - ищем НЕ числа
// \w - ищем буквы
// \W - ищем НЕ буквы
// \s - spaces - пробелы


const string = 'My name is R2D2';

console.log(string.match(/\w\d\w\d/i));
