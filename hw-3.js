// Задание 1
let password = '12345';
let answer = prompt('Введите пароль');

if (answer === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

// Задание 2
let number = Number(prompt('Введите число'));
if (number > 0 && number < 10) {
    alert('Верно');
} else {
    alert('Неверно');
}

// Задание 3
let d = Number(prompt('Введите число d'));
let e = Number(prompt('Введите число e'));

alert(d > 100 || e > 100 ? 'Верно' : 'Неверно');

// Задание 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

// Задание 5
let monthNumber = Number(prompt('Введите номер месяца в году'));

switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        alert('Зима');
        break;
    case 3:
    case 4:
    case 5:
        alert('Весна');
        break;
    case 6:
    case 7:
    case 8:
        alert('Лето');
        break;
    case 9:
    case 10:
    case 11:
        alert('Осень');
        break;
    default:
        alert('Неверный номер месяца');
        break;
}

// Задание 7
let isEvenNumber = Number(prompt('Пожалуйста, введите любое число'));

if (isNaN(isEvenNumber)) {
    alert('Вы ввели не число!');
} else if (isEvenNumber % 2 === 0) {
    alert('Число четное');
} else {
    alert('Число нечетное');
}

// Задание 8
let clientOS = 1;
if (clientOS === 0) {
    alert('Установите версию приложения для iOS по ссылке');
} else {
    alert('Установите версию приложения для Android по ссылке');
}

// Задание 9
let clientDeviceYear = 2015;
clientOS = 1;
if (clientOS === 0  && clientDeviceYear < 2015) {
    alert('Установите облегченную версию приложения для iOS по ссылке');
} else if (clientOS === 0){
    alert('Установите версию приложения для iOS по ссылке');
} else if (clientOS === 1  && clientDeviceYear < 2015){
    alert('Установите облегченную версию приложения для Android по ссылке');
} else {
    alert('Установите версию приложения для Android по ссылке');
}