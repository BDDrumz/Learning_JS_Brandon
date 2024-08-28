let map = new Map();
map.set('1', 'str1');
map.set(1, 'num1');
map.set(true, 'bool1')
alert(map.get(1));
alert(map.get('1'));
alert(map.size);

// using objets as keys
let john = {name: "John"};
let visitsCountMap = new Map();
visitsCountMap.set(john, 123);
alert( visitsCountMap.get(john));