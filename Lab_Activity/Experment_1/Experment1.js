// Constant
/*  */
const AccID=10;
document.writeln("\n Initial Constant Value of AccID as const:",AccID)
{
   try {
      AccID=20;}
    catch(err){
        document.writeln("\n Changing Constant (AccID) Value  will give error as the const value onces declared can not be changed")
        document.writeln("\n Error :",err.message)
    }
   //this will give error as the const value onces declared can not be changed 
}


// Var
/* */
var A=20;
{ 
    A=45
    document.writeln("\n Value of Var inside Scope")
    document.writeln(A)
}
    document.writeln("\n Value of Var outside  Scope")
    document.writeln(A)

// let
/* */
let B=30
{
    let B=50
    document.writeln("\n Value of let inside  Scope ")
    document.writeln(B)
}

document.writeln("\n Value of let Outside the Scope")
document.writeln(B)

// Variables in JavaScript

// string
let AccName="Aarth"
document.writeln("\n"+AccName)
document.writeln("type =",typeof(AccName))

//number
let AccId=101
document.writeln("\n"+AccId)
document.writeln("type =",typeof(AccId))

//Boolen
let Maried_status=false
document.writeln("\n"+Maried_status)
document.writeln("type =",typeof(Maried_status))

// Big Number
let AccNo=904769876453789
document.writeln("\n"+AccNo)
document.writeln("type =",typeof(AccNo))

// undefined
let Balance;
document.writeln("\n"+Balance)
document.writeln("type =",typeof(Balance))

// Null
let Interst=null
document.writeln("\n"+Interst)
document.writeln("type =",typeof(Interst))

//symbol
// sysmbol does not works on html docment 
// let Email_id=Symbol("001")
// document.writeln(Email_id)
// document.writeln("type =",typeof(Email_id))



// Activity 1

let Student_Name="RAM"
let Student_RollNo=78
let Student_Class="7A"
let Marks_Maths=67
let Marks_English=79
let Marks_Hindi=45

document.writeln("\nStudent Info ...")
document.writeln("\nStudent Name :"+Student_Name)
document.writeln("\nStudent Class :"+Student_Class)
document.writeln("\nMaths Marks :"+Marks_Maths)
document.writeln("\nMarks of English :"+Marks_English)
document.writeln("\nMarks of Hindi :"+Marks_Hindi)

// Activity 2 

if (Marks_Maths>=50 & Marks_English>=50 & Marks_Hindi>=50){
    document.writeln("\n Student is Passed ")
}
else{
    document.writeln("\n Student Failed")
}

// Activity 3

let No1=5

if (No1%2==0){
    document.writeln("\n The No is Even ")
}
else{
    document.writeln("\n The No. is Odd")
}

// Activity 4

for(i =0;i<10;i++){
    document.writeln("\nNumber : "+i)

}

// Activity 5

let a=10;
b=a;
a = 20;

document.writeln("\nValue of b :"+b)
document.writeln("\nValue of a :"+a)