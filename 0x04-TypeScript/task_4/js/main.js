"use strict";
/// <reference path='./subjects/Cpp.ts'>
/// <reference path='./subjects/Java.ts'>
/// <reference path='./subjects/React.ts'>
/// <reference path='./subjects/Subject.ts'>
/// <reference path='./subjects/Teacher.ts'>
Object.defineProperty(exports, "__esModule", { value: true });
exports.cTeacher = exports.react = exports.java = exports.cpp = void 0;
exports.cpp = new Subjects.Cpp();
exports.java = new Subjects.Java();
exports.react = new Subjects.React();
exports.cTeacher = {
    firstName: "Ada",
    lastName: "lovelace",
    experienceTeachingC: 20
};
exports.cpp.setTeacher(exports.cTeacher);
exports.java.setTeacher(exports.cTeacher);
exports.react.setTeacher(exports.cTeacher);
console.log("cpp: ".concat(exports.cpp.getRequirements()));
console.log("cpp: ".concat(exports.cpp.getAvailableTeacher()));
console.log("java: ".concat(exports.java.getRequirements()));
console.log("java: ".concat(exports.java.getAvailableTeacher()));
console.log("react: ".concat(exports.react.getRequirements()));
console.log("react: ".concat(exports.react.getAvailableTeacher()));
