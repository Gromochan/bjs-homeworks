class StudentLog {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    };
    addGrade(grade, subject) {
        if (grade > 5 || grade < 0 || typeof grade == "string") {

            return "Оценка должна быть от 1 до 5!"
        };

        this[subject] = [];
        this[subject].push(grade)


    }
    getAverageBySubject(subject) {
        let sum = 0;

        for (let i = 0; this[subject].length > i; i++) {
            sum += this[subject][i];

        }
        sum = sum / this[subject].length;
        return sum
    }

    getTotalAverage() {
        for (this[])
            if (!)
    }
}
var log = new StudentLog("Вася Пупукин");
log.addGrade(5, "chemestry")
log.getAverageBySubject("chemestry");
log.getTotalAverage();
