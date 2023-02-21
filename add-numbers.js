// Write a function that takes an array of numbers and returns the sum of the numbers.
// Use a For - of - loop

export function addNumbers(numbers) {
  let total = 0;
  for (const number of numbers) {
    total = total + +number;
    console.log(total);
  }
  return Number(total);
}

// const number1 = addNumbers(numbers);

// console.log("Returned Number:", number1);

// let animals = ["bear", "lion", "tiger"];

// for (animal of animals) {
//   console.log(animal);
// }

// let numbers = [1, 2, 3, 4];
