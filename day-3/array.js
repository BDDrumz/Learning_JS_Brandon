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