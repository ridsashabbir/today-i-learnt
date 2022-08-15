console.log("This file is added");

// this is a normal method to do this
let name = "Ridsa";
let name1 = "Ridsa1";
let name2 = "Ridsa2";
let name3 = "Ridsa3";
console.log(name + " is a good girl.");
console.log(name1 + " is a good girl.");
console.log(name2 + " is a good girl.");
console.log(name3 + " is a good girl.");

// let's do the same using a function
function greet(name){
    console.log(name + " is a good girl")
}
greet(name);
greet(name1);
greet(name2);
greet(name3);

// let's print sum
function sum(a,b,c){
    let d = a + b + c;
    return d;
}
let returnVal = sum(1,2,3);
console.log(returnVal);

// print maximum number
function max(a,b){
    if (a > b){
        console.log(a + " is greater than " + b)
    }
    else{
        console.log(b + " is greater than " + a)
    }
}
max(55,75);

// print minimum number
function min(a,b){
    if (a < b){
        console.log(a + " is minimum than " + b)
    }
    else{
        console.log(b + " is minimum than " + a)
    }
}
min(55,25);

// if both numbers are equal
function equal(a, b){
    if (a == b){
        console.log(a + " and " + b + " both are equal.");
    }
    else{
        console.log(a + " and " + b + " both are not equal.");
    }
}
equal(10, 10);
equal(5, 10);