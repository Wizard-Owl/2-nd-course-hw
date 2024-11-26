// Задание 1
const nums = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
    if (nums[i] === 10) {
        break;
    }
}

// Задание 2
const numIndex = [1, 5, 4, 10, 0, 3];
console.log(numIndex.indexOf(4));

// Задание 3
const numJoin = [1, 3, 5, 10, 20];
console.log(numJoin.join(" "));

// Задание 4
const arrCreate = [];

for (let i = 0; i <= 2; i++) {
    arrCreate[i] = [];
    for (let j = 0; j <= 2; j++) {
        arrCreate[i].push(1);
    }
}

console.log(arrCreate);

// Задание 5
const arrAdd = [1, 1, 1];

for (let i = 0; i <= 2; i++) {
    arrAdd.push(2);
}

console.log(arrAdd);

// Задание 6
const arrSort = [9, 8, 7, 'a', 6, 5];
arrSort.sort();
arrSort.pop();
console.log(arrSort);

// Задание 7
const arrMystery = [9, 8, 7, 6, 5];
let userAnswer = +prompt('Попробуйте угадать число в массиве');

if (arrMystery.includes(userAnswer)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

// Задание 8
let str = 'abcdef';
str = str.split('').reverse().join('');
console.log(str);

// Задание 9
const arrBasic = [[1, 2, 3], [4, 5, 6]];
const arrFold = [];

for (let i = 0; i < arrBasic.length; i++) {
    for (let j = 0; j <= 2; j++) {
        arrFold.push(arrBasic[i][j]);
    }
}

console.log(arrFold);

// Задание 10

const arrSum = [5, 8, 9, 1, 6, 4, 7, 2, 10];

console.log(`Исходный массив чисел: ${arrSum}; длина массива ${arrSum.length}`);

for (let i = 0; i < arrSum.length - 1; i++) {
    let sum = arrSum[i] + arrSum[i + 1];
    console.log(`Сумма ${i + 1} и ${i + 2} элементов = ${sum}`);
}

// Задание 11
let userAnswerNum = prompt('Введите целые числа через пробел');
const userArr = userAnswerNum.split(' ');

console.log(`Исходный массив чисел: ${userArr}`);

const degreeArr = userArr.map(number => number ** 2);

console.log(`Массив квадратов чисел: ${degreeArr}`);

// Задание 12
function getLengthWords(arr) {
    console.log(`Исходный массив строк: ${arr}`);

    arrLength = arr.map(str => str.length);
    
    console.log(`Массив длины строк: ${arrLength}`);
}

getLengthWords(['слово', 'произведение', 'слог', 'длинное предложение', 'буква']);

// Задание 13
function filterPositive(array) {
    console.log(`Исходный массив строк: ${array}`);

    const arrPositive = array.filter((el) => el < 0);
    console.log(`Массив отрицательных чисел: ${arrPositive}`);
}

filterPositive([-1, 0, 5, -10, 56]); // => [-1, -10]
filterPositive([-25, 25, 0, -1000, -2]); // => [-25, -1000, -2]

//Задание 14
const arrRandom = [];

for (i = 0; i <= 9; i++) {
    arrRandom[i] = Math.round(Math.random() * 10);
}

console.log(`Массив рандомных элементов: ${arrRandom}`);

const arrParity = arrRandom.filter(el => el % 2 === 0);

console.log(`Массив четных элементов: ${arrParity}`);

//Задание 15
const arrNumbsRandom = [];

for (i = 0; i <= 5; i++) {
    arrNumbsRandom[i] = Math.round(Math.random() * 10);
}

console.log(`Массив рандомных элементов: ${arrNumbsRandom}`);

const arrAverage = arrNumbsRandom.reduce((total, number) => total + number) / arrNumbsRandom.length;

console.log(`Среднее арифметическое элементов массива: ${arrAverage.toFixed(4)}`);