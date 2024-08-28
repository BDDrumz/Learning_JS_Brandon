let map = new Map();
map.set('1', 'str1');
map.set(1, 'num1');
map.set(true, 'bool1')
alert(map.get(1));
alert(map.get('1'));
alert(map.size);