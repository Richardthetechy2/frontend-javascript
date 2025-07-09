var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
function createEmployee(salary) {
    var numericSalary = typeof (salary) === 'string' ? parseFloat(salary.replace('$', '')) : salary;
    if (typeof (numericSalary) === 'number' && !isNaN(numericSalary) && numericSalary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
// console.log(createEmployee(500).constructor.name);
function isDirector(employee) {
    return employee instanceof Director;
}
function executeWork(employee) {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    }
    else {
        console.log(employee.workTeacherTasks());
    }
}
function teachClass(todayClass) {
    if (todayClass === "Math") {
        console.log("Teaching Math");
    }
    else {
        console.log("Teaching History");
    }
}
teachClass('Math');
