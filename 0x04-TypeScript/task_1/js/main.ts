interface Teacher {
    firstName: string
    lastName: string
    fullTimeEmployee: true | false
    yearsOfExperience?: number
    location: string
    [key: string]: any
}

interface Directors extends Teacher {
    numberOfReports: number
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

interface printTeacherFunction {
    (firstName: string, lastName: string): string
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`
}

// console.log(printTeacher("Samuel", "Udoh"));

class StudentClass {
    constructor(public firstName: string, public lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
    }
    workOnHomework(): string {
        return "Currently working"
    }
    displayName(): string {
        return this.firstName
    }
}

const student1: StudentClass = new StudentClass("Samuel", "Richard")