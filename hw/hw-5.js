// Задание 1
function comparison(a, b) {
    if (a > b) {
        return num1;
    } else {
        return num2;
    }
}

let num1 = +prompt('Введите первое число');
let num2 = +prompt('Введите второе число');

console.log(`Большее число ${comparison(num1, num2)}`);

// Задание 2
let parityNumber = function (number) {
    if (number % 2 == 0) {
        return 'Число чётное';
    } else {
        return 'Число нечётное';
    }
}

let userNumber = +prompt('Введите число для проверки на чётность');

console.log(parityNumber(userNumber));

// Задание 3.1
let squareNumber = num => console.log(`Квадрат числа: ${num ** 2}`);

let number = +prompt('Введите число для возведения в квадрат');

squareNumber(number);

// Задание 3.2
let returnSquare = num => num ** 2;

number = +prompt('Введите число для возведения в квадрат');

console.log(`Квадрат числа: ${returnSquare(number)}`);

// Задание 4
let returnMessage = () => {
    let age = prompt('Сколько тебе лет?')
    if (age < 0) {
        alert('Вы ввели неправильное значение');
    } else if (age >= 0 & age <= 12) {
        alert('Привет, друг!');
    } else {
        alert('Добро пожаловать!')
    }
}

returnMessage();

// Задание 5
let returnMult = (num1, num2) => {
    if ((isNaN(num1) === true || isNaN(num2) === true)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return `Произведение чисел: ${num1 * num2}`;
    }
}

let userNum1 = +prompt('Введите первое число');
let userNum2 = +prompt('Введите второе число');

console.log(returnMult(userNum1, userNum2));

// Задание 6
let returnSqv = (num) => {
    if (isNaN(num) === true) {
        return 'Переданный параметр не является числом';
    } else {
        return `${num} в кубе равняется ${num ** 3}`;
    }
}

let userNum = +prompt('Введите число для возведения в куб');

console.log(returnSqv(userNum));

// Задание 7
function getArea() {
    console.log(`Площадь круга: ${3.14 * (this.radius ** 2)}`);
}

function getPerimeter() {
    console.log(`Периметр круга: ${2 * 3.14 * this.radius}`);
}

let circle1 = {
    radius: prompt('Введите радиус первого круга'),
    area: getArea,
    perimeter: getPerimeter
}

let circle2 = {
    radius: prompt('Введите радиус второго круга'),
    area: getArea,
    perimeter: getPerimeter
}

circle1.area();
circle1.perimeter();
circle2.area();
circle2.perimeter();