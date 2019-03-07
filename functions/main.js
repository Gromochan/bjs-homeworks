// Задача 1

function getSolutions(a, b, c) {
    let x1, x2;
    let D = b ** 2 - 4 * a * c;
    console.log(D);
    if (D < 0) {
        console.log("Дискриминант меньше 0! Корней нет!")
        return {
            D: D
        };
    } else if (D > 0) {
        x1 = ((-b + Math.sqrt(D)) / (2 * a))
        x2 = ((-b - Math.sqrt(D)) / (2 * a))
        return {
            x1: x1,
            x2: x2,
            D: D
        };
    } else if (D == 0) {
        x1 = -b / (2 * a)
        return {
            x1: x1,
            D: D
        };;
    }
}

function showSolutionsMessage(a, b, c) {
    result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`)
    if (result.x1 === undefined) {
        console.log('Уравнение не имеет вещественных корней');
    } else if (result.x2 === undefined) {
        console.log(`Уравнение имеет один корень X₁ = ${result.x1}`)
    } else {
        console.log(`Уравнение имеет два корня. X₁ = ${result.x1}, X₂ = ${result.x2}`)
    }
}
showSolutionsMessage(1, 2, 3);
showSolutionsMessage(-1, -2, 3);
showSolutionsMessage(3, -18, 27);


// Задача 2

let names = {
    firstName: "Эмильо",
    lastName: "Родриго"
}

function getPersonData(secretData) {

}
