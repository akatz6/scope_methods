const coffee = require("./coffee.js");

console.log(coffee);

// Iterate over entire array with corresponding index
coffee.forEach((element, index) => {
  console.log(
    `this is the elements name:${element.name} and it's index:${index}`
  );
});

// You can also do a foreach in one line if the logic is really short
// And no need for parenthesis around parameter if only one parameter 
coffee.forEach(element => console.log(element.seasonal));

// Foreach does not work with a return element
const element = coffee.forEach((element, index) => {
  if (index === 2) {
    return element;
  }
});
console.log(element)

// Sort by price ascending, the subtraction causes a true false operation if it needs to be sorted
const sortedByPriceAsc = coffee.sort((a, b) => a.price - b.price);
console.log(sortedByPriceAsc);

const sortedByPriceDesc = coffee.sort((a, b) => b.price - a.price);
console.log(sortedByPriceDesc);

// With non numeric you need to return a true false value
const sortedByAlpha = coffee.sort((a, b) => (a.name - b.name ? 1 : -1));
console.log(sortedByAlpha);

// If not an object still need to do comparisons for numbers
// unless told other wise it will convert everything to a string
const numbers = [1, 43, 3, 5463, 7657, 45334, 645, 435, 54];
console.log(numbers.sort((a, b) => a - b));

// If not an object no need to do comparisons if strings
// Words that start with capital letters go first
// Values are based of something called ASCII https://www.techonthenet.com/ascii/chart.php
const words = ["thing", "place", "time", "Apple", "apples", "Banana"];
console.log(words.sort());

// Map create a new array with values based off of old values
const mappArr = numbers.map((x) => x * 2);
// sorting is done in place so the original array is changed
// If you need to keep the data make a deep copy
// const newArr = [...oldArr]
console.log(mappArr);

// Filtering an array this is not done in place
const overFiveDollars = coffee.filter((x) => x.price > 5.0);
console.log(overFiveDollars);
console.log(coffee);

// Reduce has two parameters a previous value and a current value
// We set the previous value be adding a comma followed by our starting value
const totalCost = coffee.reduce((prev, current) => prev + current.price, 0);
console.log(totalCost);

const scope = "This is outer scope";
const outerScope = "Hello this is outer scope";

const scopeMethod = (scope) => {
  console.log(outerScope);
  const innerVariable = "This will only print inside the method";
  console.log(innerVariable);
  if (true) {
    const innerBlock = "This will only exist in the if statement";
    console.log(innerBlock);
  }
  //   console.log(innerBlock)
  return `This is in the method ${scope}`;
};

console.log(scopeMethod("This is inner scope"));
console.log(`This is not in the method ${scope}`);
// console.log(innerVariable);
