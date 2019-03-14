// Задача 1

function getSolutions(a, b, c) {
    let x1, x2;
    let D = b ** 2 - 4 * a * c;
    console.log(D);
    if (D < 0) {
        console.log("Дискриминант меньше 0! Корней нет!")
        return {
            roots: [],
            D: D
        };
    } else if (D > 0) {
        x1 = ((-b + Math.sqrt(D)) / (2 * a))
        x2 = ((-b - Math.sqrt(D)) / (2 * a))
        return {
            roots: [x1, x2],
            D: D
        };
    } else if (D == 0) {
        x1 = -b / (2 * a)
        return {
            roots: [x1],
            D: D
        };;
    }
}

function showSolutionsMessage(a, b, c) {
    result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`)
    if (result.roots.length == 0) {
        console.log('Уравнение не имеет вещественных корней');
    } else if (result.roots.length == 1) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`)
    } else if (result.roots.length == 2) {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`)
    }
}
showSolutionsMessage(1, 2, 3);
showSolutionsMessage(-1, -2, 3);
showSolutionsMessage(3, -18, 27);


// Задача 2
let names = {}
let secretData = {
    aaa: 1,
    bbb: 0
}

function namingMagic(secretData) {
    for (key in secretData)
        if (secretData[key] == 0) {
            names[key] = "Эмильо"
        } else if (secretData[key] == 1) {
        names[key] = "Родриго"
    }

}

function getPersonData(secretData) {
    namingMagic(secretData)
    names.firstName = names.aaa;
    names.lastName = names.bbb;
    delete names.aaa;
    delete names.bbb;
    console.log(names)
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


function calculateAverage(array, average) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    sum = sum / array.length
    average.push(sum)
    return average;
};

function getAverageScore(data) {
    let array = []
    let average = []
    for (key in data) {
        array = data[key];
        calculateAverage(array, average);
    };
    array = average;
    calculateAverage(array, average);
    let n = 0;
    data.average = 0;
    for (key in data) {
        data[key] = average[n];
        n++;
    }
    console.log(data);
}

getAverageScore(data);
