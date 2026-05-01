// const a = 10;
// a=20;
// console.log(a);

// This code will throw an error because 'a' is declared as a constant using 'const'.
// Constants cannot be reassigned after their initial assignment.
var b = 15;
let ab=25;
{
var b = 5;
let ab=30;
console.log(b,ab);
}
console.log(b,ab);
// This code demonstrates the difference between 'var' and 'let'.
// The variable 'b' declared with 'var' is function-scoped and can be redeclared and reassigned.
// The variable 'ab' declared with 'let' is block-scoped and cannot be redeclared in the same scope.
// output will be:
// 5 30
// 15 25