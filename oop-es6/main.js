class StudentLog {
    constructor(name) {
        this.name = name;
        this.subjects = {};
    }
    getName() {
        return this.name;
    };
    addGrade(grade, subject) {
        if (grade > 5 || grade < 0 || typeof grade !== "number") {
            return "Оценка должна быть от 1 до 5!"
        };
        if (this.subjects[subject] !== undefined) {
            this.subjects[subject].push(grade);
        } else {
            this.subjects[subject] = [];
            this.subjects[subject].push(grade);
        }
        console.log(this.subjects[subject].length);
        return
    }
    getAverageBySubject(subject) {
        let sum = 0;
        for (let i = 0; this.subjects[subject].length > i; i++) {
            sum += this.subjects[subject][i];

        }
        sum = sum / this.subjects[subject].length;

        return sum
    }
    getTotalAverage(fn) {
        let i = 0;
        let sum = 0;

        for (let key in this.subjects) {
            console.log(this.subjects[key])
            sum += fn(key);
            i++;
        }
        sum = sum / i;
        return sum
    }
    getGradesBySubject(subject) {
        if (this.subjects[subject] === undefined) {
            return []
        }
        console.log(this.subjects[subject]);
        return this.subjects[subject]
    }
    getGrades() {
        return this.subjects
    }

}
var log = new StudentLog("Вася Пупукин");
log.addGrade(5, "chemestry");
log.addGrade(5, "chemestry");
log.addGrade(4, "chemestry");
log.addGrade(4, "History");
log.addGrade(3, "History");
log.addGrade(4, "History");
log.addGrade(3, "History");
log.getAverageBySubject("chemestry");
log.getTotalAverage(log.getAverageBySubject.bind(log));
log.getGradesBySubject("chemes");
log.getGrades();
