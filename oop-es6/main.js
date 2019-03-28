class StudentLog {
    constructor(name) {
        this.name = name;
        this.subject = {};
    }
    getName() {
        return this.name;
    };
    addGrade(grade, subject) {
        if (grade > 5 || grade < 0 || typeof grade !== "number") {
            return "Оценка должна быть от 1 до 5!"
        };
        if (this.subject[subject] !== undefined) {
            this.subject[subject].push(grade);
        } else {
            this.subject[subject] = [];
            this.subject[subject].push(grade);
        }
        console.log(this.subject[subject].length);
        return
    }
    getAverageBySubject(subject) {
        let sum = 0;
        for (let i = 0; this.subject[subject].length > i; i++) {
            sum += this.subject[subject][i];

        }
        sum = sum / this.subject[subject].length;

        return sum
    }
    getTotalAverage(fn) {
        let i = 0;
        let sum = 0;
        console.log(this.subject)
        for (let key in this.subject) {
            console.log(this.subject[key])
            sum += fn(key);
            i++;
        }
        sum = sum / i;
        return sum
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
