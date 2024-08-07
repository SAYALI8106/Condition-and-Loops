// Q2. Write a program that grades students based on their marks.
// If greater than 90 then A GradE
// If between 70 and 90 then a B gradE
// If between 50 and 70 then a C gradE
// Below 50 then an F grade
function gradeStudent(marks) {
  let grade;

  if (marks > 90) {
    grade = "A";
  } else if (marks >= 70 && marks <= 90) {
    grade = "B";
  } else if (marks >= 50 && marks < 70) {
    grade = "C";
  } else {
    grade = "F";
  }

  return grade;
}

// Test the function with different marks
let studentMarks = [95, 85, 65, 45, 78, 50];

studentMarks.forEach(marks => {
  console.log(`Marks: ${marks}, Grade: ${gradeStudent(marks)}`);
});
