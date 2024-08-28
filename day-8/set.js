let set = new Set();
let john = {name: "john"};
let peter = {name: "Peter"};
let mary = {name: "Mary"};

set.add(john);
set.add(peter);
set.add(mary);
set.add(john);
set.add(mary); 

alert(set.size)

for (let user of set){
    alert(user.name);
}
console.log(user.name);
