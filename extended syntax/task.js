function calculateQuadraticEquation() {
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a, b, c);
    window.equation.textContent = `${a}*x^2 + (${b})*x - (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = " + result;
}

function getResult(a, b, c) {
    let x, x1, x2;
    let D = b ** 2 + 4 * a * c;
    if (D < 0) {
        console.log("Дискриминант меньше 0! Корней нет!")
        return null;
    } else if (D > 0) {
        x = [];
        x.push((-b + Math.sqrt(D)) / (2 * a))
        x.push((-b - Math.sqrt(D)) / (2 * a))
        return x;
    } else if (D = 0) {
        x = -b / (2 * a)
        return x;
    }
}

function calculateDrinkTask() {
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}



function askDrink(name, dateOfBirthday) {
    let today = new Date().getFullYear();
    let age = today - dateOfBirthday.getFullYear();
    console.log(age);
    if (age > 18) {
        return `Не желаете ли олд-фэшн, ${name}?`
    } else {
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`
    }
}

function calculateAverageRating() {
    let marks = window.marks.value.split("").map(Number);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks) {
    marks = marks.filter(function (number) {
        return number > 0
    });;
    if (marks.length > 5) {
        console.log("Ой-ой! Чисел-то больше пяти! Вырезаем ненужное...");
        marks.splice(5);
    }

    function getSum(total, num) {
        return total + num;
    }
    marks = marks.reduce(getSum) / marks.length;

    return marks;
}
