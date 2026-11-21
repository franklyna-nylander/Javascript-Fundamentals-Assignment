// Concatenation and Template Literals
let courseName = "BSEM";
let lecturerName = "Amadu Kamara";
let creditHours = "4";
let semester = "3";

// Printing a sentence using string concatenation
console.log(
  "The " +
    courseName +
    " course is overseen by the lecturer " +
    lecturerName +
    ", it has " +
    creditHours +
    " credit hours and is offered by semester " +
    semester +
    " students.",
);

let testScore1 = 68;
let testScore2 = 74;
let testScore3 = 89;

let numberOfTestScores = 3;
// calculating the average of three test scores
let average = testScore1 + testScore2 + testScore3 / numberOfTestScores;

console.log("\n***********************************");
console.log("Average Test Score Calculator");
console.log("************************************");
console.log(`Average Test Score: ${average.toFixed(2)}`);
