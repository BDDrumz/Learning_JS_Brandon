// let map = new Map();
// map.set('1', 'str1')
// .set(1, 'num1')
// .set(true, 'bool1');
// alert(map.get(1));
// alert(map.get('1'));
// alert(map.size);

// // using objets as keys
// let john = {name: "John"};
// let visitsCountMap = new Map();
// visitsCountMap.set(john, 123);
// alert( visitsCountMap.get(john));
// //example
// john = {name: "John"};
// let ben = {name: "Ben"};
// let visitsCountObj = {};
// visitsCountObj.set(john, 234);
// visitsCountObj.set(ben, 123);
// alert(visitsCountObj["[object, Object]"]);
//Iterate over a map
let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50],
]);
for (let vegetable of recipeMap.keys()){
    alert(vegetable); 
}
for ( let amount of recipeMap.values()) {
    alert(amount);
}
for ( let entry of recipeMap) {
    alert(entry);
}