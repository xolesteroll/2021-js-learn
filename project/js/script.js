/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const ads = document.querySelectorAll('.promo__adv img'),
        genreBlock = document.querySelector('.promo__genre'),
        mainBg = document.querySelector('.promo__bg'),
        movieList = document.querySelector('.promo__interactive-list'),
        form = document.querySelector('form.add'),
        input = form.querySelector('.adding__input'),
        checkbox = form.querySelector('input[type=checkbox]');


    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const sortArray = (arr) => {
        arr.sort();
    };

    sortArray(movieDB.movies);


    const manageMovieList = (films, parent) => {

        parent.innerHTML = "";
        sortArray(films);
        films.forEach((item, i) => {
            if (item.length > 21) {
                item = (`${item.slice(0, 21)}...`);
            }
            item = item.toLowerCase();
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1}. ${item}
                <div class="delete"></div>
            </li>
        `;

            document.querySelectorAll('.delete').forEach((btn, i) => {
                btn.addEventListener('click', () => {
                    btn.parentElement.remove();
                    movieDB.movies.splice(i, 1);
                    manageMovieList(films, parent);
                });
            });



        });
    };

    const deleteAds = (arr) => {
        arr.forEach(ad => {
            ad.remove();
        });
    };

    const addMovieToList = () => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const newFilm = input.value;
            const favorite = checkbox.checked;
            if (newFilm) {
                movieDB.movies.push(newFilm);
                sortArray(movieDB.movies);
                manageMovieList(movieDB.movies, movieList);
                if (favorite) {
                    console.log('Добавляем любимый фильм');
                }
            }
            input.value = "";
        });
    };

    const makeChanges = (bg, genre) => {
        bg.style.backgroundImage = "url('img/bg.jpg')";
        genre.textContent = "Драма";
    };


    deleteAds(ads);
    makeChanges(mainBg, genreBlock);
    addMovieToList();
    manageMovieList(movieDB.movies, movieList);

});





