// Задание 1
const string = 'Шла Саша по шоссе';

console.log(string.toUpperCase());

// Задание 2
function searchStart(arr, str) {
    const filterArr = [];

    for (i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase().startsWith(str.toLowerCase())) {
            filterArr.push(arr[i]);
        }
    }
    console.log(filterArr);
}

searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');

// Задание 3
const number32 = 32.58884;

console.log(Math.floor(number32));
console.log(Math.ceil(number32));
console.log(Math.round(number32));

// Задание 4
const numbers = [52, 53, 49, 77, 21, 32];
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

// Задание 5
function getRandom() {
    console.log(Math.ceil(Math.random() * 10));
}

getRandom();

// Задание 6
function getRandomArrNumbers(num) {
    const randomArr = [];

    for (i = 0; i < Math.floor(num / 2); i++) {
        randomArr.push(Math.round(Math.random() * num));
    }
    console.log(randomArr);
}

getRandomArrNumbers(7);
getRandomArrNumbers(12);

// Задание 7
function getRandomNumber(min, max) {
    min = Math.floor(min);
    max = Math.floor(max);

    const result = Math.round(Math.random() * (max - min)) + min;
    console.log(result);
}

getRandomNumber(10, 30);

// Задание 8
let myDate = new Date();
const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };

console.log(myDate.toLocaleDateString('ru-RU', options));

// Задание 9
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate.toLocaleDateString('ru-RU', options));

// Задание 10
function getFormattedDateTime(date) {
    const days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    let fullDate = 'Дата: ' + date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear() + ' ' + '- это ' + days[date.getDay()];
    let time = 'Время: ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

    console.log(fullDate);
    console.log(time);
}

getFormattedDateTime(new Date());