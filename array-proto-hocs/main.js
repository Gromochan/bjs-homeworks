const summ = (a, b) => a + b;
const mSumm = memoize(summ, 10);

function memoize(fn, limit) {
    const results = [];
    return function (a, b) {
        if (results.length > limit) {
            console.log("Слишком много результатов!")
            results.shift();
        }
        if (compareArrays(results, arguments)) {
            console.log("Такие данные уже были!");
            return console.log(results.find((el, i) => el.args[i]).result)
        } else {
            results.push({
                args: Array.from(arguments),
                result: fn(a, b)
            });
            return console.log(results)
        }
    }
}

function compareArrays(array1, array2) {
    return (array1.some((el, i) => el.args.every((el, i) => el === array2[i])))
}

mSumm(5, 20)
mSumm(5, 20)
mSumm(5, 21)
mSumm(5, 22)
mSumm(5, 23)
mSumm(5, 24)
mSumm(5, 25)
mSumm(5, 26)
mSumm(5, 27)
mSumm(5, 28)
mSumm(5, 29)
mSumm(5, 29)
mSumm(5, 30)
mSumm(5, 31)
mSumm(5, 32)
mSumm(5, 22)
mSumm(5, 23)
mSumm(5, 24)
