let o=[1,2,3,4,5];
let a=[100,101,102];

const reducer = (accumulateur, currentValue) => accumulateur + currentValue;

var average = o.reduce(reducer);
var average2 = a.reduce(reducer);

console.log(average/o.length);
console.log(average/a.length);
