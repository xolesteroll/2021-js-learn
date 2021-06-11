'use strict';

const person = {
    name: 'Alex',
    tel: '+744444444',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

const samePerson = JSON.parse(JSON.stringify(person)); // Глубокое клонирование объекта

samePerson.tel = '00000000';

console.log(person);
console.log(samePerson);

// const personJSON = JSON.stringify(person);

// console.log(Object.keys(JSON.parse(personJSON)));
// console.log(Object.keys(personJSON));