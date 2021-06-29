'use strict';

const app = '123';

const number = 1;

(function(){ // Аногнимная самовызывающаяся функция, создает локальную область видимости
    let number = 2;
    console.log(number);
    console.log(number + 3);
}());

console.log(number);

const user = (function(){
    const privat = function() {
        console.log('I am private!');
    };

    return {
        sayHello: privat
    };
}());

user.sayHello();