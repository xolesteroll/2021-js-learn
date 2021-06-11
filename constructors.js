'use strict';

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = () => {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушел...`);
};

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

ivan.exit();

ivan.hello();
alex.hello();

console.log(ivan, alex);

// Этот синтаксис использовался в ES5