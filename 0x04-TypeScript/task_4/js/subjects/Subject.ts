/// <reference path='Teacher.ts' />
namespace Subjects {
    export class Subject {
        protected teacher: Teacher

        constructor() {
        }

        setTeacher(teacher: Teacher): void {
            this.teacher = teacher
        }
    }
} 