const btn = document.querySelector('#btn');

const remove = (e) => {
    console.log(e.target);
};

btn.addEventListener('click', remove);

// btn.removeEventListener('click', remove);

const link = document.querySelector('a');

link.addEventListener('click', (e) => {
    e.preventDefault();

    console.log(e.target);
});
