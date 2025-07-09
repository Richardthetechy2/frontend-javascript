interface DirectorInterface {
    workFromHome(): string
    getCoffeeBreak(): string
    workDirectorTasks(): string
}
interface TeacherInterface {
    workFromHome(): string
    getCoffeeBreak(): string
    workTeacherTasks(): string
}

class Teacher implements TeacherInterface {
    constructor() { }
    workFromHome(): string {
        return "Cannot work from home"
    }
    getCoffeeBreak(): string {
        return "Cannot have a break"
    }
    workTeacherTasks(): string {
        return "Getting to work"
    }
}

class Director implements DirectorInterface {
    constructor() { }
    workFromHome(): string {
        return "Working from home"
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break"
    }
    workDirectorTasks(): string {
        return "Getting to director tasks"
    }
}

function createEmployee(salary: number | string): Director | Teacher {
    const numericSalary = typeof (salary) === 'string' ? parseFloat(salary.replace('$', '')) : salary
    if (typeof (numericSalary) === 'number' && !isNaN(numericSalary) && numericSalary < 500) {
        return new Teacher()
    } else {
        return new Director()
    }
}

// console.log(createEmployee(500).constructor.name);

function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director
}

function executeWork(employee: Director | Teacher) {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    } else {
        console.log(employee.workTeacherTasks());
    }
}
// executeWork(createEmployee(200));

type Subjects = "Math" | "History"

function teachClass(todayClass: Subjects) {
    if (todayClass === "Math") {
        console.log("Teaching Math");
    } else {
        console.log("Teaching History");
    }
}
teachClass('Math');