'use strict';

const box = document.getElementById('box');
const buttons = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');


box.style.backgroundColor = 'blue';
box.style.width = '500px';

box.style.cssText = 'background-color: black; margin: 0 auto;';

buttons[0].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.cssText = "background-color: blue;";
}

hearts.forEach(item => {
    item.style.cssText = "background-color: blue;";
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был хуй');

div.classList.add('black');

// document.body.append(div);

wrapper.append(div);

// for (let i = 0; i < circles.length; i++) {
    
//     circles[i].append(div);
//     console.log(circles[i]);
// }

hearts[0].replaceWith(circles[0]);


