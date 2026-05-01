// 1) Declare Aarray,object,String and function
 let  arr=[10,20,30,40]
 console.log("Value :"+arr + " Type :"+typeof(arr));

 let Balance=new Number(5000)
 console.log("value : "+Balance+" Type :"+typeof(Balance));

 let str=new String("Hello World")
 console.log("value : "+str+" Type :"+typeof(str));

 // Funtions 
 
 // simple Funtion
 function add(a,b){
    return a+b
 }
 // Arrow Funtion 
 let add1=(num1,num2)=>{
    return num1+num2;
 }

 // funtion calling

 console.log("Simple funtion calling :"+add(10,20))
 console.log("Arrow Funtion Calling : " + add1(20,30))
 
// 2) Print Largest number in Array
let Arr=[30,40,60,30];
console.log(Math.max(...Arr))// the max funtion need all the vaules saperate so we use Spread Operator(...)

// 3) find reverse No. in String


//check Palindrome  in string
// write a code for phibonacci series
// count vowels in String 
// remove duplicate No. from array
//funtion to find even or odd 
// code for Sum of Array
