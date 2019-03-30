// // Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
console.log("-----Divisble By 3----")
function printNumbersDivisibleByThree() {
  var index = 1;
  while (index <= 1000) {
    if (index % 3 === 0) {
      console.log(index);
    }
    index += 1;
  }
}
printNumbersDivisibleByThree();


// // Write a method that accepts an array of strings and prints out every other string.
console.log("-----Every Other String----")
function printEveryOtherItem(strings) {
  var index = 0;
  strings.forEach(function(string) {
    if (index % 2 === 0) {
      console.log(string);
    }
    index += 1;
  });
}
printEveryOtherItem(["a", "b", "c", "d", "e"]);


// // Write a method that accepts an array of numbers and returns the sum.
console.log("-----Return Sum of Array----")
function computeSum(numbers) {
  var sum = 0;
  numbers.forEach(function(number) {
    sum += number;
  });
  return sum;
}
console.log(computeSum([2, 4, 5]));

// // Start with the hash: city_populations = {chi: 2700000}
// // Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
// // The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
console.log("-----Update Hash----")
var cityPopulations = {chi: 2700000};
cityPopulations["nyc"] = 8400000;
cityPopulations.sf = 800000;  // same as cityPopulations["sf"]
console.log(cityPopulations);



// Write a method that prints out every number from 1 to 100. 
console.log("-----Print to 100----")
function printEveryNumber(){
  var num = 1;
  while (num <= 100) {
    console.log(num);
    num += 1;
  } 
}

printEveryNumber();

// function printToOneHundred() {
//   for (var i = 0; i < 100; i += 1) {
//     console.log(i);
//   }
// }

// printToOneHundred();

// // Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).
console.log("-----Print Every Other Number----")

function printEveryOtherNumber(){
  for (var i = 1; i < 100; i += 2) {
    console.log(i);
  }
}
 printEveryOtherNumber();

// // Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.
console.log("-----How Many 55's----")
function howManyFiftyFives(array) {
  var count = 0;
  
  array.forEach(function(item){
    if (item === 55) {
     count += 1;
    }
  });
    console.log(count);
}

howManyFiftyFives([22, 44, 55, 55]);


// // Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
// // For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].
console.log("-----Add AwesomeSauce to Array----")

function awesomesauces(strings) {
  // var index = 0;
  var newArray = [];
  strings.forEach(function(string) {
    newArray.push(string);
    newArray.push('awesomesauce');
  });
  newArray.pop();
  console.log(newArray);
  }
awesomesauces(["one", "two", "three"]);

// Start with the hash: item_amounts = {chair: 5, table: 2}
// Someone just bought two chairs. Change the hash such that the chair amount is 3.
// The final result should be: {chair: 3, table: 2}
// console.log ("--------- Hash Take Away 2 chairs --------");
console.log("-----Update Chair----")
item_amounts = {chair: 5, table: 2};
item_amounts['chair'] = 3;
console.log(item_amounts);


// Start with the hash: item_amounts = {chair: 5, table: 2}
// You received 7 desks to sell. Change the hash to include desks.
// The final result should be: {chair: 5, table: 2, desk: 7}
console.log("--------- Add to Desk --------");
var item_amounts = {chair: 5, table: 2};
item_amounts['desk'] = 7;
console.log(item_amounts);

// Write a method that accepts a number and returns its factorial.
// For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
console.log ("--------- Factorial--------");
function factor(number) {
  var i = 1;
  while (number > 0) {
    i = i * number;
    number -= 1;
  }
  console.log(i);
}
factor(5);

// Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array. 
// For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].
console.log("-----Add Two Arrays----")
function addTwoArrays(array1, array2) {
  var i = 0;
  var new_array = [];
  while (i < array1.length) {
    new_array[i] = array1[i] + array2[i];
    i += 1;
  }
  console.log(new_array);
}

addTwoArrays([4, 2, 3], [4, 5, 6])