// Q4. Generate n9mbers between any 2 given n9mbers.
// Ex:
//  const num1 = 10
//  const num2 = 25;
// Output: 11, 12, 13, …., 25

const num1 = 10;
const num2 = 25;

let numbers = [];
for (let i = num1 + 1; i <= num2; i++) {
    numbers.push(i);
}

console.log(numbers.join(', '));
