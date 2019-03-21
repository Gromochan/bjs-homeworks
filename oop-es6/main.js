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

        this[subject] = grade;

    }
    getAverageBySubject() {

    }
}
var log = new StudentLog("Вася Пупукин");
console.log(log.getName());
log.addGrade(5, "chemestry")
console.log(log.chemestry)
