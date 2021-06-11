'use strict';

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// Все перечисленные ниже методы возвращают новый массив а не изменяют старый

// filter 

// const shortNames = names.filter(name => name.length < 5); // В одну строчку
const shortNames = names.filter(name => {
    return name.length < 5;
});

console.log(shortNames);

// map

const answers = ['IvAN', 'AnnA', 'Hello'];

const result = answers.map(name => name.toLowerCase());

console.log(result);

// every/some

const some = [4, 'sadas', 'dasda'];

console.log(some.some(item => typeof item === 'number')); // Если хотя бы один элемент соответствует условию метод возвращает true

console.log(some.every(item => typeof item === 'number')); // ТОлько если все элементы массива соответсвуют условию метод возвращает true

// reduce

const nums = [4, 5, 6, 7, 8];
// const reducedNums = nums.reduce((sum, current) => sum + current); // В одну строку
const reducedNums = nums.reduce((sum, current) => {
    return sum + current;
});
console.log(reducedNums);

const fruits = ['apple', 'pear', 'plum'];
const deliveredFruits = fruits.reduce((sum, current) => `${sum}, ${current}`);
console.log(deliveredFruits);

const obj = {
    ivan: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal'
};

const persons = Object.entries(obj)
    .filter(item => item[1] === 'person')
    .map(item => item[0]);

console.log(persons);
