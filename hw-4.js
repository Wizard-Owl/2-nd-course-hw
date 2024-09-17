// Задание 1
for (let i = 1; i <= 2; i++) {
    console.log('Привет');
}

// Задание 2
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Задание 3
for (let i = 7; i <= 22; i++) {
    console.log(i);
}

// Задание 4
const obj = {
    Коля: 200,
    Вася: 300,
    Петя: 400
}

for (let key in obj) {
    console.log(`${key} — зарплата ${obj[key]} долларов`);
}

// Задание 5
let num = 0;
let n = 1000;
let i = 1;

while (n > 50) {
    n /= 2;
    num++;
}
console.log(num + ' итераций');

// Задание 6
let friday = 6;

while (friday <= 31) {
    console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`);
    friday += 7;
}