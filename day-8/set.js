// let set = new Set();
// let john = {name: "john"};
// let peter = {name: "Peter"};
// let mary = {name: "Mary"};

// set.add(john);
// set.add(peter);
// set.add(mary);
// set.add(john);
// set.add(mary); 

// alert(set.size)

// for (let user of set){
//     alert(user.name);
// }
// console.log(user.name);

//Iteration over set
let set = new Set(["oranges", "apples", "bananas"]);
for ( let value of set) alert(value);
set.forEach((value, valueAgain, set) =>{
    alert(value);
});