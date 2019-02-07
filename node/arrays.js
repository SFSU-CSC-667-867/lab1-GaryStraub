// Arrays in js

// arrays can be delared explicitly
const array = [9, 3, 4];

// or with new keyword
const anotherArray = new Array(5);

// access array elements
console.log(array[0]);

// change elements
array[1] = 'hello';

// for practice

// use forEach
array.forEach(function(x){
    console.log(x);
});
// use map
console.log(array.map(x => x*2));
console.log(array);
const newArray = array.map(x => x *2);
console.log(newArray);

// use pop
console.log(array.pop())
console.log(array);
// use push
console.log(array.push(7))
console.log(array);
// use shift
console.log(array.shift())
console.log(array);
// use unshift
array.unshift(43)
console.log(array);
// use filter