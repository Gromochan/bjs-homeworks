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

let names = {}
let secretData = {
    aaa: 1,
    bbb: 1
}

function getPersonData(secretData) {
    if (secretData.aaa == 0) {
        names.firstName = "Эмильо"
    } else if (secretData.aaa == 1) {
        names.firstName = "Родриго"
    }
    if (secretData.bbb == 0) {
        names.lastName = "Эмильо"
    } else if (secretData.bbb == 1) {
        names.lastName = "Родриго"
    }
    console.log(names)
    return
}
getPersonData(secretData);

// Задача 3
let data = {
    algebra: [2, 4, 5, 2, 3, 4],
    geometry: [2, 4, 5],
    russian: [3, 3, 4, 5],
    phycics: [5, 5],
    music: [2, 2, 6],
    english: [4, 4, 6],
    poetry: [5, 3, 4],
    chemestry: [2],
    french: [4, 4]
};

function getAverageScore(data) {

    let average = {};
    for (key in data) {
        average[key] = data[key].reduce(function (currentElement, index, allElements) {
            let sum = 0;
            for (let i = 0; i < data[key].length; i++) {
                sum += data[key][i];

            }
            sum = sum / data[key].length;
            return sum;
        });
    }
    let sum = 0
    for (key in average) {
        sum += average[key]
    }
    average.average = sum / Object.keys(average).length;
    console.log(average);
}
getAverageScore(data);
