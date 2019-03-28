const summ = (a, b) => a + b;
const mSumm = memoize(summ, 10);

function compareArrays(array1, array2) {
    if (array1.length == array2.length) {
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] != array2[i]) {
                return false;
            }
        }
        return true;
    }
    return false;
}

function memoize(fn, limit) {
    let e = fn(3, 5)
    const results = [];
    return function (a, b, comFn) {
        for (let i = 0; i < results.length; i++) {
            console.log(comFn(results[i].args, Array.from(arguments)));
            if (comFn(results[i].args, Array.from(arguments))) {
                console.log("Такие данные уже были!")
                return results[i].result
            }
        }

        results.push({
            args: arguments,
            result: e
        });
        console.log(limit);
        console.log(results.length);
        if (results.length > limit) {
            console.log("Слишком много результатов!")
            results.shift();
        }
        return results;
    }
}
mSumm(5, 3, compareArrays)
mSumm(5, 3, compareArrays)
mSumm(5, 3, compareArrays)
mSumm(8, 6, compareArrays)
mSumm(9, 6, compareArrays)
mSumm(51, 5, compareArrays)
mSumm(52, 3, compareArrays)
mSumm(76, 3, compareArrays)
mSumm(46, 3, compareArrays)
mSumm(54, 6, compareArrays)
mSumm(56, 6, compareArrays)
mSumm(510, 3, compareArrays)
mSumm(525, 3, compareArrays)
mSumm(614, 3, compareArrays)
mSumm(6, 3, compareArrays)
mSumm(5, 6, compareArrays)
mSumm(5, 6, compareArrays)
mSumm(5, 3, compareArrays)
