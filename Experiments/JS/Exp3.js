// //Function 
// /*
// Function is a block of code that can be called and executed multiple types without 
// rewriting the same code again and again.
// */

// function greet(name) {
//     return "Hello, I am " + name;
// }
// console.log(greet("Aditya"));

// //Function add two no.s(Parameterized function)

// function add(a, b) {
//     return a + b;
// }
// console.log(add(10,20));

// function add2no(n1,n2){
//     let result =n1+n2;
//     return result;
// }

// console.log(add2no(10,20));

// function addno(n1,n2){
//     let result =n1+n2;
//     return result;
//     console.log(result);//unreachable code after return code does not execute
// }
// addno(10,20);

// function loginuser(username){
//     return `${username} just logged in`;
// }
// console.log(loginuser("Aditya"));
// console.log(loginuser());//when string is empty then it is undefined


// function add3no(n1){
//     return n1;
// }
// console.log(add3no(10,20,30));
// console.log(add3no([10,20,30]));
// //rest or sperad operator

// function addnumbers(...numbers){
//     return numbers;
// }
// console.log(addnumbers(10,20,30,40,50));
// console.log(addnumbers(1,2,3,4,5,6,7,8,9,10));

// obj1={
//     name:"Aditya",
//     age:20
// };
// function printobj(obj){
//     console.log(`Name:${obj.name}, Age:${obj.age}`);
// }
// console.log(printobj(obj1)); 


// obj2={
//     arr:[10,20,30,40,50]
// };

// function printarr(obj){
//     console.log(`Array:${obj.arr}`);
//     return ;
// }
// printarr(obj2);
// console.log(printarr(obj2));


// const arr2=[1,2,3,4,5];
// function handlearr(arr){
//     return arr[2];
// }
// console.log(handlearr(arr2));

// //Arrow Function
// //Add two no.s using arrow function
// const addArrow=(n1,n2)=> n1+n2;
// console.log(addArrow(100,200));


//diff bet simple and arrow function this keyword
//why we use this keyword
//what is arrow function
const chat=function(){
    username="Aditya";
    console.log(this.username);
    
}
chat();

const arrowfun=()=>{
    username="Aditya";
    console.log(this);
}
arrowfun();

//Activity 2:write a code for arrow function with 2 examples
const arr1=[10,20,30,40,50];
printarr=()=>{
    console.log(arr1);
    
    return arr1;
}
printarr();


//Activity 3:write a code for switch case in javascript with example
switch (1) {
    case 1:
        console.log("Case 1 executed");
        break;
    case 2:
        console.log("Case 2 executed");
        break;

    default:
        console.log("Default case executed");
        break;
}

//Activity 4:write a code for how to use truthy and falsy values in javascript with example
//truthy values
if (1) {
    console.log("1 is truthy");
}
//falsy values
if (0) {
    console.log("0 is falsy");
} 
//Activity 5:how to use turnary operator in javascript with example
//turnary operator
let age = 18;
let isAdult = age >= 18 ? "1" : "0";
console.log(isAdult);

//Activity 7:Write code fo loops in javascript with examples 5 types of loops
//while loop
let i = 0;
while (i < 5) {
    console.log("While loop iteration: " + i);
    i++;
}
//do while loop
do{
    console.log("Do while loop iteration: " + i);
}while(i<5)
//for loop
for(let j=0;j<5;j++){
    console.log("For loop iteration: " + j);
}
//for in loop
const student = {
  name: "Aditya",
  age: 21,
  course: "BTech"
};

for (let key in student) {
  console.log(key + ": " + student[key]);
}
//for of loop
const arr = [10, 20, 30];

for (let value of arr) {
  console.log(value);
}

//Activity 8:Differnce for in and for of loop

//Activity 9:how to use map and filter function in javascript with examples