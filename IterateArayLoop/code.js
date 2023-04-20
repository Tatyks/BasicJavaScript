// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0; // Declatred and Initialized variable total to 0

for (let i = 0; i < myArr.length; i++){
  console.log('---Start of iteration---: ' + (i+1))
  console.log('Total now: ' + total);
  console.log('Current value of "i": ' + i);
  console.log('myArr[i] now: ' + myArr[i]);

  total += myArr[i]; 
  
  console.log('Total now: ' + total); 
  console.log('Current value of "i": ' + i);
  console.log('---End of iteration---\n')
}
console.log(total);