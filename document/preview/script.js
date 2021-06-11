'use strict';

const box = document.querySelector('.box');
const btn = document.querySelector('button');

const width = box.clientWidth;
const height = box.clientHeight;
const oWidth = box.offsetWidth;
const oHeight = box.offsetHeight;
const scrollH = box.scrollHeight;
const scrollW = box.scrollWidth;

console.log(width, height);
console.log(oWidth, oHeight);
console.log(scrollH, scrollW);

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 50 + 'px';
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect().top);
console.log(window.getComputedStyle(box).marginLeft);
