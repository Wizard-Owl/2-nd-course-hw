let getSeason = () => {
    let month = +prompt('Введите число от 1 до 12');

    if (month >= 3 && month <= 5) {
        alert('Весна');
    } else if (month >= 6 && month <= 8) {
        alert('Лето');
    } else if (month >= 9 && month <= 11) {
        alert('Осень');
    } else if (month >= 1 && month <= 2 || month === 12) {
        alert('Зима');
    } else {
        alert('Введено неверное значение, необходимо ввести число от 1 до 12');
    }
}

let getFruitsResult = () => {
    let listFruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

    listFruits = listFruits.sort(() => Math.random() - 0.5);
    alert(listFruits.join(', '));

    let randomIndex1 = Math.round(Math.random() * (listFruits.length - 1));
    let randomIndex2 = Math.round(Math.random() * (listFruits.length - 1));

    if (randomIndex2 === randomIndex1) {
        while (randomIndex2 === randomIndex1) {
            randomIndex2 = Math.round(Math.random() * (listFruits.length - 1));
        }
    }

    function strCondition(index) {
        let result;
        if (index === 0) {
            result = prompt('Каким было первое слово?');
        } else if (index === listFruits.length - 1) {
            result = prompt('Каким было последнее слово?');
        } else {
            result = prompt(`Каким было ${index + 1}-е слово?`);
        }
        return result;
    }

    let firstWord = strCondition(randomIndex1);
    let secondWord = strCondition(randomIndex2);

    if ((firstWord === null || firstWord === '') && (secondWord === null || secondWord === '')) {
        alert('Вы не ввели ни одного слова, пожалуйста, попробуйте еще раз');
    } else if ((firstWord === null || firstWord === '') || (secondWord === null || secondWord === '')) {
        alert('Вы ввели только одно слово из двух, пожалуйста, попробуйте еще раз');
    } else {
        if (firstWord.toLowerCase() === listFruits[randomIndex1].toLowerCase() && secondWord.toLowerCase() === listFruits[randomIndex2].toLowerCase()) {
            alert('Поздравляю, оба слова введены верно!');
        } else if (firstWord.toLowerCase() !== listFruits[randomIndex1].toLowerCase() && secondWord.toLowerCase() !== listFruits[randomIndex2].toLowerCase()) {
            alert('Оба слова неверные, вы проиграли');
        } else {
            alert('Вы были близки к победе!');
        }
    }
}