let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Event Number:", evenNumbers.join(","));

// Multiply each even number by 2
let multipliedByTwo = evenNumbers.map(num => num * 2);
console.log("Multiply of 2:", multipliedByTwo.join(","));

// Calculate total amount using reduce
let totalAmount = multipliedByTwo.reduce((total, current) => total + current, 0);
console.log("Total Amount:", totalAmount);