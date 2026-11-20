// Object Manipulation (Read, Update, Add)
let course = {
  code: "BSEM2104",
  title: "Web Development",
  lecturer: "Amadu Kamara",
  credits: 3,
  isCore: true,
};

// Logging the title property
console.log(`Title: ${course.title}`);
console.log("*****************************\n");

// Updating lecturer name
course.lecturer = "Samuel Amkam";
console.log(`Lecturer: ${course.lecturer}`);
console.log("*****************************\n");

// Adding a new property
course.room = "Lab 4";
console.log(`Room: ${course.room}`);
console.log("*****************************");