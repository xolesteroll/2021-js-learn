const btn = document.querySelector('.btn');
let timerId,
    i = 0;

const myAnimation = () => {
    const elem = document.querySelector('.box');
    let position = 0;

    const frame = () => {
        if (position == 300) {
            clearInterval(id);
        } else {
            position++;
            elem.style.top = position + "px";
            elem.style.left = position + "px";
            console.log(position);
        }
    };

    const id = setInterval(frame, 10);

};

btn.addEventListener('click', myAnimation);

// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 2000);
// });

// const logger = ()=> {
//     if (i ===3) {
//         clearInterval(timerId);
//     }
//     console.log('HEllo world');
//     i++;
// };

// let id = setTimeout(function log() { // ЗДесь мы использовали рекурсию, в таком случае функция всегда будет ждать полсекунды
//     console.log('Hello');               // Прежде чем вызываться опять, если же мы будем использовать SetInterval
//     id = setTimeout(log, 500);      // То он нам не гарантирует что будет ждать положеное время если его превысит
// }, 500);                            // Время выполнения самой функции (в таком случае повторное исполнение будет мгновенным)
