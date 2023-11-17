// // DAY 2
// // Q1. Print numbers from 100 to 1
const x = [];

for (let i = 100; i >= 1; i--) {
  x.push(i);
}
console.log(x);

// // Q2. Print the odd numbers less than 100 you must use IF statement
const y = [];
if (true) {
  for (let i = 1; i <= 100; i = i + 2) {
    y.push(i);
  }
  console.log(y);
}

// Q3. In 1 above for multiple of 3 print fizz, for multiple of 5 print buzz, for multiple of 15 print fizzbuzz.

for (let i = 100; i >= 1; i--) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}

// // Q4. Print the even numbers greater 100 and less than 200 you must use IF statement

for (let i = 100; i < 200; i = i + 1) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// // Q5. Create an array of 11 cars.
const car = [
  "Benz",
  "Ford",
  "Honda",
  "Jeep",
  "Lexus",
  "Toyota",
  "Dodge",
  "Tesla",
  "Nissan",
  "Audi",
  "Chevrolet",
];

console.log(car);

// // Q6.	Print the first, middle, and last car in 4 above without hard coding.

console.log(Math.ceil(car.length / 2));
let midd = Math.floor(car.length / 2);
let last = car.length - 1;
console.log(car[0], car[midd], car[last]);

// Q7. Create an empty array and fill it dynamically with 100 to 1.
const array = [];

for (let i = 100, a = 100; i >= 1; i--, a--) {
  array.push(i);
}
console.log(array);

// Q10. Print the multiplication table with 7

// for (let i = 1, num = 7; i <= 12; i++) {
//   console.log(`${num} x ${i} =  ${i * num}`);
// }

// let num = prompt("input the number you want");
// let stp = prompt("input where to stop");
// for (let i = 1; i <= stp; i++) {
//   console.log(`${num} x ${i} =  ${i * num}`);
// }

// // Q11.	Print all the multiplication tables with numbers from 1 to 12.

// for (let i = 1, num = 1; i <= 12; i++) {
//   console.log(`${num} x ${i} =  ${i * num}`);
// }

// for (let i = 1, num = 2; i <= 12; i++) {
//   console.log(`${num} x ${i} =  ${i * num}`);
// }

// for (let i = 1, num = 3; i <= 12; i++) {
//   console.log(`${num} x ${i} =  ${i * num}`);
// }

// for (let i = 1, num = 4; i <= 12; i++) {
//   console.log(`${num} x ${i} =  ${i * num}`);
// }

// for (let i = 1, num = 5; i <= 12; i++) {
//   console.log(`${num} x ${i} =  ${i * num}`);
// }

// for (let i = 1, num = 6; i <= 12; i++) {
//   console.log(`${num} x ${i} =  ${i * num}`);
// }

// for (let i = 1, num = 7; i <= 12; i++) {
//   console.log(`${num} x ${i} =  ${i * num}`);
// }

// for (let i = 1, num = 8; i <= 12; i++) {
//   console.log(`${num} x ${i} =  ${i * num}`);
// }

// for (let i = 1, num = 9; i <= 12; i++) {
//   console.log(`${num} x ${i} =  ${i * num}`);
// }

// for (let i = 1, num = 10; i <= 12; i++) {
//   console.log(`${num} x ${i} =  ${i * num}`);
// }

// for (let i = 1, num = 11; i <= 12; i++) {
//   console.log(`${num} x ${i} =  ${i * num}`);
// }

// for (let i = 1, num = 12; i <= 12; i++) {
//   console.log(`${num} x ${i} =  ${i * num}`);
// }

/***** Printing *****/

// for (let i = 1; i <= 12; i++) {
//   for (let j = 1; j <= 12; j++) {
//     let product = i * j;
//     console.log(`${i} x ${j} = ${product}`);
//   }
//   console.log();
// }

// for (let m = 1; m <= 5; m++) {
//   // console.log("#");
//   let add_hash = "";
//   for (let n = 1; n <= 5; n++) {
//     add_hash = add_hash + "#";
//   }
//   console.log(add_hash);
//   // console.log("#");
// }

// for (let i = 1; i <= 5; i++) {
//   let _hash = "";
//   for (let j = 1; j <= 10; j++) {
//     _hash = _hash + "#";
//   }
//   console.log(_hash);
// }

// for (let i = 1; i <= 5; i++) {
//   let _hash = "";
//   for (let j = 1; j <= i; j++) {
//     _hash = _hash + "#";
//   }
//   console.log(_hash);
// }
