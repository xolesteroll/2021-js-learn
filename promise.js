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


const newReq = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('ПОдготовка Данных');

        const user = {
            name: 'Vasilliy',
            age: '35'
        }

        resolve(user);
    }, 2000);
})
    .then(user => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Получение данных');
                setTimeout(() => {
                    console.log(user);
                }, 2000);
                resolve();
                reject();
            }, 2000);
        });



    }).catch(() => {
        console.log('Что то пошло не так');
    });

function titleCase(title, minorWords) {
    const titleArr = title.split(' ');
    let newArr;

    if (minorWords) {
        newArr = titleArr.map((string, i) => {
            const reg = new RegExp(string.toLowerCase());
            const reg2 = new RegExp(string.toLowerCase() + ' ');
            const reg3 = new RegExp(' ' + string.toLowerCase() + ' ');
            if (i == 0 ||
                (minorWords.toLowerCase().search(reg) == -1 && minorWords.toLowerCase().search(reg) != minorWords.length - (string.length + 1)) ||
                (minorWords.toLowerCase().search(reg2) == -1 && minorWords.toLowerCase().search(reg2) != 0) ||
                minorWords.toLowerCase().search(reg3) == -1 || string.toLowerCase() != minorWords.toLowerCase()
            ) {
                console.log(1);
                string = string.toLowerCase();
                return string.replace(string.charAt(0), string.charAt(0).toUpperCase());

            }
            if (){
                console.log(0);
                return string.toLowerCase();
            }

        });
    } else {
        newArr = titleArr.map((string) => {
            string = string.toLowerCase();
            return string.replace(string.charAt(0), string.charAt(0).toUpperCase());
        });
    }

    return newArr.join(' ');
}

console.log(titleCase('a clash of KINGS', 'a an the of'));



const titleCase2 = (title, minorWords) => {

    const titleArr = title.split(' ');
    const minorWordsArr = minorWords ? minorWords.split(' ') : false;

    const newArr = titleArr.map((word, i) => {

        minorWordsArr.forEach(match => {

            if (i == 0 || word.toLowerCase() != match.toLowerCase()) {
                word = word.replace(word.charAt(0), word.charAt(0).toUpperCase());
            } else {
                word = word.toLowerCase();
            }

        });

        return word;

    });



    console.log(newArr);
};

titleCase2('a clash of KINGS', 'a an the of kings');

// const string = "let";
// const minorWordsArr = 'mlete me';

// const reg = new RegExp(' ' + string + ' ');

// console.log(minorWordsArr.match(reg));

