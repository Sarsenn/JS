/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

function start() {
	numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ) {
		numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
	}
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  geners: {},
  privat: false,
  showMyDB:function () {
	if(!personalMovieDB.privat) {
		console.log(personalMovieDB);
	}},
	writeYourGenres: function () {
		for(let i = 0; i < 3; i++) {
			personalMovieDB.geners[i] = prompt(`Ваш любимый жанр под номером ${i+1}`)
			if(personalMovieDB.geners[i] == null || personalMovieDB.geners[i] == '') {
				i--;
			}
		}
		for(let i = 0; i < 3; i++) {
			alert(`Любимый жанр #${i+1} - это ${personalMovieDB.geners[i]}`)
		}

	},
	detectPersonalLevel:function() {
		if(personalMovieDB.count < 10) {
			alert("Просмотрено довольно мало фильмов")
		}else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			alert("Вы классический зритель")
		}else if (personalMovieDB.count > 30){
			alert("Вы киноман")
		} else{
			alert("Произошла ошибка");
		}
	},
	rememberMyFilm:function() {
		for (let i = 0; i < 2; i++ ) {
			let a = prompt('Один из последних просмотренных фильмов?', '').trim();
		
			if(a !== '' && a !== null && a.length < 50 ) {
				let b = +prompt('На сколько оцените его?', '').trim()
				personalMovieDB.movies[a] = b
			} else {
				i--;
			}
		}
		},
	toggleVisibleMyDB:function() {
		if(personalMovieDB.privat){
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
		}
}


personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilm();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();