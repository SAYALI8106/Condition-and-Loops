// Q5. Use the while loop to print numbers from 1 to 25 in ascending and descending order
let i = 1;
let ascending=[];
console.log("Ascending order")
while (i <= 25) {
   ascending.push(i);
    i++;
}
console.log(ascending);

let descending=[];
console.log("Descending order")
let j = 25;
while (j >= 1) {
    descending.push(j);
    j--;
}
console.log(descending);