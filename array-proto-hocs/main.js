function compareArrays(array1, array2) {
    if (array1.length == array2.length) {
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] != array2[i]) {
                console.log("Not good")
                return false;
            }
        }
        console.log("All good")
        return true;
    }
    return false;
}

function summ(a, b) {
    let e = a + b;
    results.push({
        args: [a, b],
        result: [e]
    })
}

function memorize(fn, limit) {
    const results = [];
    return function workingHorse() {
        for (let i = 0; i < results.length; i++) {
            if (compareArrays(results[i].args, Array.from(arguments).join(', '))) {
                console.log("Такие данные уже были!")
                return results[i].result
            }
            results.push({
                args: [a, b],
                result: [a + b]
            });
            if (results.length > limit) {
                delete results[0];
            }

        }
    }
}
memorize(summ(3, 5), 10)
