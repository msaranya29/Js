// Funtions

let sum= function add(a,b){
    return a + b;
}


let diff= function add(a,b){
    return a - b;
}

function operate(operationFunc,a,b){
    return operationFunc(a,b);
}

console.log(operate(sum,5,3));
console.log(operate(diff,5,3));


// Arrow Functions
let s = (a, b) => {
  return a + b;
};
console.log(s(2,3)); // 5

function outer(){
    function inner(){
        console.log("inner function");
    }
    return inner;
}
let innerFunc=outer();
console.log(innerFunc);
innerFunc();