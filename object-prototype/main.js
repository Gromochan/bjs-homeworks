function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;
}

function checkBirthday(birthday) {
    let now = new Date().getTime();
    birthday = new Date(birthday);
    birthdayMS = birthday.getTime();
    let diff = now - birthdayMS;
    let age = quickMath();

    function quickMath() {
        let date = new Date().getFullYear();
        let startingYear = birthday.getFullYear();
        let count = 0;
        for (let years = date - startingYear; years > 0; years--) {
            if (((startingYear % 4 == 0) && (startingYear % 100 != 0)) || (startingYear % 400 == 0)) {
                count++
            }
            startingYear++;
            console.log(count)
        }
        diff = diff - count * 86400000;
        return diff / 31536000000
    }
    return age;
}




function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;
}

function getAnimalSound(animal) {
    let sound = animal.sound;
    if (animal == undefined) {
        return null
    }
    return sound;
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let average = 0
    for (let i = 0; marks.length > i; i++) {
        average += parseInt(marks[i]);
    }
    average = average / marks.length
    return Math.round(average);
}
