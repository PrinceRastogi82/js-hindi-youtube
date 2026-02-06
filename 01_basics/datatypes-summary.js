//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4. 3


                                        // ================= STACK vs HEAP (JavaScript) ================= 

// STACK MEMORY
// - Stores primitive data types
// - Stores function call frames
// - Fast access
// - Values are copied

let a = 10;      // stored in stack
let b = a;       // copy of value is created in stack

b = 20;

console.log(a); // 10  (a is unchanged)
console.log(b); // 20


// Function calls also use stack
function add(x, y) {
    let result = x + y; // x, y, result -> stack
    return result;
}

add(2, 3);



// HEAP MEMORY
// - Stores non-primitive data (objects, arrays, functions)
// - Accessed using references
// - Slower than stack
// - Changes affect all references

let obj1 = {
    name: "Prince",
    age: 20
}; // object stored in heap, obj1 stores reference (address)

let obj2 = obj1; // reference copied, NOT the object

obj2.age = 21;

console.log(obj1.age); // 21 (changed)
console.log(obj2.age); // 21


// Array example (heap)
let arr1 = [1, 2, 3]; // array in heap
let arr2 = arr1;     // reference copy

arr2.push(4);

console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]


// HOW TO AVOID HEAP REFERENCE ISSUE (SHALLOW COPY)
let arr3 = [...arr1]; // new array created in heap

arr3.push(5);

console.log(arr1); // [1, 2, 3, 4]
console.log(arr3); // [1, 2, 3, 4, 5]
