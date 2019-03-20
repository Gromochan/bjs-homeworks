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

function summ() {
    for (let i = 0; i < array1.length; i++) {
        compareArrays(results[i].args, Array.from(arguments).join(', '))
    }
}

function memorize(fn, limit) {
    let results = []

    return summ
}
