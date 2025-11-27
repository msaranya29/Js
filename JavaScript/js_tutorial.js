//Primitive / Value Types in JavaScript
//1. String
let x="saranya";
console.log(x);
console.log(typeof x);

//2. Number
let y=123;
console.log(y);
console.log(typeof y);


let z=1.4;
console.log(z);
console.log(typeof z);

//3. Boolean
let a=true;
console.log(a);
console.log(typeof a);

//4. Undefined
let w;
console.log(w);
w="hello";
console.log(typeof w);

//5. Null
let n=null;
console.log(n);
console.log(typeof n); //bug in js it shows object

// Reference Types in JavaScript- Objects, Arrays, Functions
// Arrays and functions are special types of objects oly 

//1. Object

let course={
    name:"js",
    duration:3,
    platform:"coursera"
};
console.log(course);
console.log(typeof course);
console.log(course.name);
console.log(course['name']);

// Reference and Value Types copying
// Primitive types are copied by their value
// Reference types are copied by their reference
let r="keerthi";
let s=r;
r="saru";
console.log(r);
console.log(s);

let obj1={
    name:"js"}
let obj2=obj1;
obj1.name="javascript";

console.log(obj1);
console.log(obj2);


//2. Array(lenght and type can be dynamic)
let colors=["red","green","blue",6,null];
console.log(colors);
console.log(colors[0]);
console.log(typeof colors);


//3. Function
function createCourse(courseName){
    console.log("course created: "+ courseName);
}
createCourse("JavaScript");

let a1=10;
const a2=20;
var c=30;
console.log(a1);
console.log(a2);
console.log(c);


function hello(){
    let x=10;
    console.log(x);

}
x=100;
hello();
