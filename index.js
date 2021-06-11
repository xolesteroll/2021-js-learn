"use sctrict";

let str = "some";
let strObj = new String(str);

// console.log(typeof str);
// console.log(typeof strObj);

console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    addArmor() {
        this.armor += 100;
        console.log(this.armor);
    },
    addHealth() {
        this.health *= 2;
        console.log(this.health);
    }  
};

// const john = {
//     health: 100
// };

const john = Object.create(soldier);

// Object.setPrototypeOf(john, soldier);    Чтобы присвоить свойства одного объекта(2 аргумент) к существующему объекту (1 аргумент)

// john.__proto__ = soldier; Устаревший вариант





john.addArmor();
john.addHealth();
// console.log(john.health);
console.log(john);

