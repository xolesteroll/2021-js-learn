'use strict';

function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;
    }

    console.log(sum());
}

showThis(4, 5);

const obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);
        return this.a + this.b;
    }
};

console.log(obj.sum());

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'John'
};

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

function count(num) {
    return this * num;
}

const double = count.bind(2);
console.log(double(3));

// 1) Обычная функция: this = window, если use strict, то undefined
// 2) Контекст у методов объекта будет сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) РУчная привязка this: call, apply, bind