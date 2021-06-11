'use strict';

// console.log('Запрос данных...');

// const req = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('Подготовка данных...');
    
//         const product = {
//             name: 'TV',
//             price: 200
//         };
        
//         resolve(product);
//     }, 2000);
// }).then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'ordered';
//             console.log(product);
//             resolve(product);
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then((data) => {
//     console.log(data);
// }).catch(() => {
//     console.error('ПРоизошла Ошибка');
// }).finally(() => {
//     console.log('Finally');
// });

const test = time => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), time);
    });
};

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('All');
// });

Promise.race([test(1000), test(2000)]).then(() => {
    console.log('All');
});


const req = new XMLHttpRequest();
console.dir(req);

const prom = new Promise((resolve, reject) => {

});
console.dir(prom);
