function Student(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(25).fill(undefined);

    this.getAge = function() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    };

    this.getAverageGrade = function() {
        if (this.grades.length === 0) {
            return 0;
        }
        const sum = this.grades.reduce((total, grade) => total + grade, 0);
        return sum / this.grades.length;
    };

    this.present = function() {
        const index = this.attendance.findIndex(status => status === undefined);
        if (index !== -1) {
            this.attendance[index] = true;
        } else {
            console.log("Attendance list is full.");
        }
    };

    this.absent = function() {
        const index = this.attendance.findIndex(status => status === undefined);
        if (index !== -1) {
            this.attendance[index] = false;
        } else {
            console.log("Attendance list is full.");
        }
    };

    this.summary = function() {
        const averageGrade = this.getAverageGrade();
        const attendanceCount = this.attendance.filter(status => status !== undefined).length / this.attendance.length;

        if (averageGrade > 90 && attendanceCount > 0.9) {
            return "Молодець!";
        } else if (averageGrade > 90 || attendanceCount > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    };
}

// Створення екземплярів студентів
const student1 = new Student("Іван", "Петров", 2001);
const student2 = new Student("Марія", "Іванова", 2000);

// Використання методів
student1.grades = [95, 70, 92];
student1.present();
student1.present();
student1.absent();

console.log(`${student1.firstName} ${student1.lastName} вік: ${student1.getAge()}, середня оцінка: ${student1.getAverageGrade()}, відвідування: ${student1.attendance}`);
console.log(`${student1.firstName} ${student1.lastName}: ${student1.summary()}`);

student2.grades = [90, 95, 94];
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();

console.log(`${student2.firstName} ${student2.lastName} вік: ${student2.getAge()}, середня оцінка: ${student2.getAverageGrade()}, відвідування: ${student2.attendance}`);
console.log(`${student2.firstName} ${student2.lastName}: ${student2.summary()}`);
