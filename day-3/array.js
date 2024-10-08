/*
//Relationship between length and numerical properties

const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3

//index is outside the current bounds of the array
fruits[5] = "mango";
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6

//increasing array length
fruits.length = 15;
console.log(fruits);
console.log(Object.keys(fruits));
console.log(fruits.length);
console.log(fruits[2]);

//decreasing array length
fruits.length = 0;
console.log(Object.keys(fruits)); 
console.log(fruits.length);

//fruits array using array literal notation
const fruits = ["Apple", "Banana"];
console.log(fruits.length);
// 'fruits2' array created using the Array() constructor.
const fruits2 = new Array("Apple", "Banana");
console.log(fruits2.length);    

// 'fruits3' array created using String.prototype.split().
const fruits3 = "Apple, Banana".split(" ");
console.log(fruits3.length);
//split()
let text = "Hello, how are you?";
let words = text.split(" "); // Splits the string into an array of words
console.log(words); // Output: ["Hello,", "how", "are", "you?"]

//Remove multiple items from the end of an array using splice()
//Trucate, const start = positive num
const fruits = ["Apple", "Banana","Strawberry", "Mango", "Cherry"];
const removedItem = fruits.pop();
console.log(fruits);
console.log(removedItem); 

//Remove the first item from an array

//Create a string from an array using join()
const fruits = ["Apple", "Banana"];
const fruitsString = fruits.join(",");
console.log(fruitsString);

//Find the index of an item in an array indexOf()
const fruits = ["Apple", "Banana"];
console.log(fruits.indexOf("Banana"));

//Append an item to an array
const fruits = ["Apple", "Banana"];
const newLength = fruits.push("Orange");
console.log(fruits);
console.log(newLength);


//Remove the first item from an array
const fruits = ["Apple", "Banana","Strawberry", "Mango", "Cherry"];
const removedItem = fruits.unshift("plum");
console.log(fruits);
console.log(removedItem); 

//Remove a single item by index
const fruits = ["Apple", "Banana","Strawberry", "Mango", "Cherry"];
const start = fruits.indexOf("Banana");
const deleteCount = 1;
const removedItem = fruits.splice(start, deleteCount);
console.log(fruits);
console.log(removedItem);


//Remove multiple items by index
const fruits = ["Apple", "Banana","Strawberry", "Mango", "Cherry"];
const start = 1;
const deleteCount = 3;
const removedItem = fruits.splice(start, deleteCount);
console.log(fruits);
console.log(removedItem);
*/
//Merge multiple arrays together
const fruits = ["apple", "Banana", "Orange"];
const moreFruits = ["Mango", "Cherry"];
const combinedFruits = fruits.concat(moreFruits);
console.log(fruits);
console.log(moreFruits)
console.log(combinedFruits);
