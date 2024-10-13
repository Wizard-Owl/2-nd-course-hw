// Задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

function compareNumbers(a, b) {
    return a.age - b.age;
}

console.log(people.sort(compareNumbers));

// Задание 2
function isPositive(number) {
    return number > 0;
}
function isMale(person) {
    return person.gender === 'male';
}

function filter(arr, ruleFunction) {
    const output = [];

    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            output.push(arr[i]);
        }
    }
    return output;
}

console.log(filter([3, -4, 1, 9], isPositive));

const genderOfPeople = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(genderOfPeople, isMale));

// Задание 3
const intervalId = setInterval(() => {
    const currentDate = new Date();
    console.log(currentDate);
}, 3000);

setTimeout(() => {
    clearInterval(intervalId)
    console.log('30 секунд прошло');
}, 30000);

// Задание 4
function delayForSecond(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
})

// Задание 5
function delaySecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000)
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

delaySecond(() => {
    sayHi('Глеб');
});