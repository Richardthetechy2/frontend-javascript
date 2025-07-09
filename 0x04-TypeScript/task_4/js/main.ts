/// <reference path='./subjects/Cpp.ts'>
/// <reference path='./subjects/Java.ts'>
/// <reference path='./subjects/React.ts'>
/// <reference path='./subjects/Subject.ts'>
/// <reference path='./subjects/Teacher.ts'>

export const cpp = new Subjects.Cpp()
export const java = new Subjects.Java()
export const react = new Subjects.React()

export const cTeacher: Subjects.Teacher = {
    firstName: "Ada",
    lastName: "lovelace",
    experienceTeachingC: 20
}
cpp.setTeacher(cTeacher)
java.setTeacher(cTeacher)
react.setTeacher(cTeacher)

console.log(`cpp: ${cpp.getRequirements()}`);
console.log(`cpp: ${cpp.getAvailableTeacher()}`);

console.log(`java: ${java.getRequirements()}`);
console.log(`java: ${java.getAvailableTeacher()}`);

console.log(`react: ${react.getRequirements()}`);
console.log(`react: ${react.getAvailableTeacher()}`);