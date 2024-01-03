// Sample grades
const grades = [95, 85, 70, 55];

// Provide feedback based on each grade using if-else statements
grades.forEach(grade => {
  let feedback = '';

  // Write your if-else statements here
  // Use ranges for grade comparisons
  if (grade > 90) {
    feedback = 'Excellent!';
  }
  else if (grade > 75 && grade < 89) {
    feedback = 'Good job!';
  } 
  else {
    feedback = 'Need improvement';
  }
  console.log(`Grade: ${grade} - ${feedback}`);
});