const summ = (a, b) => {
    return {
        args: [a, b],
        result: [a + b]
    }
}
const mSumm = memoize(summ(3, 5), 10);


function memoize(fn, limit) {
    const results = [];
    results.push(fn);
    console.log(results);
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
            console.log(results);
            if (results.length > limit) {
                delete results[0];
            }

        }
    }
}

function compareArrays(array1, array2) {
    if (array1.length == array2.length) {
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] != array2[i]) {
                return false;
            }
        }
        console.log("All good")
        return true;
    }
    return false;
}
