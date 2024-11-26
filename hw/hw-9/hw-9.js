// Задание 1
const headerEl = document.querySelector('h1');
const btnEl = document.querySelector('button');

btnEl.addEventListener('click', function () {
    headerEl.classList.toggle('hidden');
});

// Задание 2
const paragraphEl = document.querySelector('p');
const btnColorEl = document.querySelector('#color');

btnColorEl.addEventListener('click', function () {
    paragraphEl.style.color = 'blue';
});

// Задание 3
const headerTextEl = document.querySelector('.header2');
const btnChangeTextEl = document.querySelector('.changeText');

btnChangeTextEl.addEventListener('click', function () {
    headerTextEl.textContent = 'Привет, мир!';
});

// Задание 4
const descriptionEl = document.querySelectorAll('.description');

descriptionEl.forEach((el) => {
    el.textContent = 'Измененный текст';
})

// Задание 5
descriptionEl.forEach((el) => {
    el.textContent = 'Новый текст';
})

// Задание 6
const btnCreateEl = document.querySelector('.btnCreateEl');

btnCreateEl.addEventListener('click', function () {
    const pNewEl = document.createElement('p');
    pNewEl.textContent = 'Новый абзац';
    document.body.appendChild(pNewEl);
});