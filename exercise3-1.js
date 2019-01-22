let o=[1,2,3,4,5];
let a=[100,101,102];

const reducer = (accumulateur, currentValue) => accumulateur + currentValue;

console.log(o.reduce(reducer));
console.log(a.reduce(reducer));