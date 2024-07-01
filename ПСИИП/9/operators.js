// if
function checkAge(age) {
    if (age >= 18) {
        return "Совершеннолетний";
    } else {
        return "Несовершеннолетний";
    }
}

// switch
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 1: return "Понедельник";
        case 2: return "Вторник";
        case 3: return "Среда";
        case 4: return "Четверг";
        case 5: return "Пятница";
        case 6: return "Суббота";
        case 7: return "Воскресенье";
        default: return "Неверный номер дня";
    }
}

// for
function sumNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// while
function countDown(start) {
    let i = start;
    while (i > 0) {
        console.log(i);
        i--;
    }
}

// do..while
function guessNumber() {
    let correctNumber = 7;
    let guess;
    do {
        guess = parseInt(prompt("Угадайте число от 1 до 10"));
    } while (guess !== correctNumber);
    alert("Вы угадали!");
}

// break и continue
function printEvenNumbers(max) {
    for (let i = 0; i <= max; i++) {
        if (i % 2 !== 0) {
            continue;
        }
        console.log(i);
        if (i >= 10) {
            break;
        }
    }
}