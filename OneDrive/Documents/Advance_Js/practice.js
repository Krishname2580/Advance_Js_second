/* DAY 2: Variables, var/let/const, Scope, Hoisting, TDZ 
 1. Write a program to demonstrate how var, let, and const behave differently when declared inside a loop.
                                             &  
 2. Create a program that shows the difference between function scope of var and block scope of let.*/
// ---------------->>>>>>>>>>>>

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }    
// console.log(i);  //var is FUNCTION scoped --> accessible outside loop


// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }
// // console.log(i); //let is BLOCK scoped --> not accessible outside loop


// for (const i of [1,2,3]) {
//     console.log(i);
// }    
// //console.log(i); //const is BLOCK scoped --> not accessible outside loop
// ------------------------------------------------------------------------------------------------------------------------

// 3. Write a program to prove that re-declaring a variable with var works, but not with let or const. 
// ----------->>>>

// // Using var (re-declaration allowed)
// var a = 10;
// var a = 20; 
// console.log("var a =", a);


// // Using let (re-declaration not allowed)
// let b = 30;
// // let b = 40;
// console.log("let b =", b);


// // Using const (re-declaration not allowed)
// const c = 50;
// // const c = 60; 
// console.log("const c =", c);
// ------------------------------------------------------------------------------------------------

// 4. Demonstrate a case where a const object can have its properties changed, even though reassignment is 
// not allowed. 
// --------->>>>>>

// const student ={
//     name: "Krishna", 
//     age: 24
// }
// student.age = 25; //Changing a property allowed
// student.city = "Kolkata"; //Adding a new property allowed

// // student = {name: "Ram"}; //Reassigning the whole object not allowed

// console.log(student);
// -------------------------------------------------------------------------------------------------------------

//5.Write a program showing how hoisting works differently for var vs let. &
//6.Create a program where accessing a let variable before declaration throws a TDZ (Temporal Dead Zone) 
// error. 
// ---------->>>>>>>

// console.log(a);  // undefined (var is hoisted)
// console.log(b);  // ReferenceError (let is hoisted but not initialized)
//so accessing it before declaration causes a TDZ error.
// var a = 10;
// let b = 20;
// ----------------------------------------------------------------------------------------------------------------

// 6.Demonstrate shadowing by declaring a variable inside a block that has the same name as an outer 
// variable (with var and let). 
// --------->>>>>>

// var a = 10;
// console.log("Outer:", a);
// {
//     var a = 20; 
//     console.log("Inner:", a); 
// }
// console.log("After block a:", a);

// let b = 5;
// console.log("Outer:", b);
// {
//     let b = 10;
//     console.log("Inner:", b);
// }
// console.log("After block b:", b);
// -------------------------------------------------------------------------------------------------

// 8.Write a program showing the effect of hoisting in function declarations vs function expressions. 
// ------->>>>>>

// hello();
// function hello() {
//     console.log("function declaration!");
// }

// try {
//     sayHello();
// } catch (e) {
//     console.log(e.message);
// }
// let sayHello = function () {
//     console.log("function expression");
// };
// -------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------

/*DAY 3: Operators 
1. Write a program to check if a number is odd or even without using the modulus operator (%). */
// --------------------->>>>>>>>>>>>>>>
// function check(num){
//     if(Number.isInteger(num/2)){
//         console.log(num, "is even");
//     } else{
//         console.log(num, "is odd");
//     }
// }
// check(20);
// check(5);
// -------------------------------------------------------------------------------------------------------

// 2.Use the ternary operator to classify a student’s grade based on their score. 
// -------------->>>>>>>>
// let score = 98;
// let grade = 
// score>=90 ? "A" :
// score>=80 ? "B" :
// score>=60 ? "C" :
// score>=40 ? "D" :
// F;
// console.log("Grade:",grade);
// ------------------------------------------------------------------------------------------------------

// 3.Demonstrate the difference between == and === by comparing variables of different data types.
// ------------>>>>>>>>>>>>>
// let a = 5;   
// let b = "5"; 
// let c = true;
// let d = 1;

// console.log("a == b:", a == b);
// console.log("a === b:", a === b);

// console.log("c == d:", c == d);
// console.log("c === d:", c === d);
// -----------------------------------------------------------------------------------------------------

// 4.Write a program that swaps two numbers without using a third variable, only using arithmetic operators. 
// ------------->>>>>>>>>>>
// let a = 10;
// let b = 5;
// console.log("Before Swap: a =", a, ", b =", b);

// a = a + b; 
// b = a - b; 
// a = a - b; 

// console.log("After Swap: a =", a, ", b =", b);
// --------------------------------------------------------------------------------------------------------------

// 5.Use logical operators to check if a year is a leap year or not.
// ------------->>>>>>>>>>>
// let year = 2000;
// if(year%4 === 0 && year%100 !== 0 || year%400 === 0){
//     console.log(year,"is leap year");
// } else{
//     console.log(year,"is not a leap year");
// }
// -----------------------------------------------------------------------------------------------

// 6.Demonstrate the use of the nullish coalescing operator (??) with multiple fallback values. 
// ------------>>>>>>>>>>>>
// let a = null;
// let b = undefined;
// let c = 0;
// let d = "Hello";

// let result = a ?? b ?? c ?? d ?? "Default Value";

// console.log(result);
// -------------------------------------------------------------------------------------------------------

// 7.Write a program that uses bitwise operators to check if a given number is a power of 2.
// --------------->>>>>>>>>>>>>>>
// function check(num) {
//     return num > 0 && (num & (num - 1)) === 0;
// }
// console.log(check(7));
// console.log(check(2));
// ---------------------------------------------------------------------------------------------------------

// 8.Write a program that calculates the area of a rectangle only if both length and breadth are greater than 
// 0, using short-circuit evaluation (&&). 
// ----------------------->>>>>>>>>>>>>
// let length = 5;
// let breadth = 8;

// (length > 0 && breadth > 0) &&
// console.log("Area of rectangle:", length * breadth);
// ---------------------------------------------------------------------------------------------------------

/*DAY 4: Conditional & Loop Statements 
1. Write a program that finds the largest of three numbers using only if-else (no Math.max). */

// let a = 10;
// let b = 25;
// let c = 15;

// let largest;

// if (a >= b && a >= c) {
//     largest = a;
// } else if (b >= a && b >= c) {
//     largest = b;
// } else {
//     largest = c;
// }
// console.log("Largest number is:", largest);
// ------------------------------------------------------------------------------------------------------------------
// 2. Use switch to build a simple calculator that can perform addition, subtraction, multiplication, and division.

// let num1 = 8;
// let num2 = 5;
// let operator = "*";

// let result;

// switch (operator) {
//     case "+":
//         result = num1 + num2;
//         break;

//     case "-":
//         result = num1 - num2;
//         break;

//     case "*":
//         result = num1 * num2;
//         break;

//     case "/":
//         if (num2 === 0) {
//             result = "Error! Cannot divide by zero.";
//         } else {
//             result = num1 / num2;
//         }
//         break;

//     default:
//         result = "Invalid operator!";
// }

// console.log("Result:", result);
// -----------------------------------------------------------------------------------
// 3.Write a program to print all even numbers between 1 and 50 using a for loop.

// console.log("Even Numbers are: ");

// for(let i =1;i <=50;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }
// ----------------------------------------------------------------------------------
// 4.Write a program to print the multiplication table of a given number using a while loop.

// let num = 7;
// let i = 1;

// while (i <= 10) {
//     console.log(num + " x " + i + " = " + (num * i));
//     i++;
// }
// ----------------------------------------------------------------------------------------

// 5.Use a do-while loop to repeatedly ask the user for input until they type "exit".

// let input;

// do {
//     input = prompt("Enter something (type 'exit' to stop):");
// } while (input !== "exit");

// console.log("Program ended.");
// -----------------------------------------------------------------------------------------
// 6.Write a program that iterates through an array of numbers and prints only the odd numbers using a 
// for...of loop. 

// let numbers = [10, 12, 17, 20, 59, 60];

// for (let num of numbers) {
//     if (num % 2 !== 0) {
//         console.log(num);
//     }
// }
// -----------------------------------------------------------------------------------------------

// 7. Write a program to iterate through an object and print all key-value pairs using for...in.

// let student ={
//     name: "Raju",
//     age: 25,
//     class: "XII"
// }
// for(let i in student){
//     console.log(i,":",student[i]);
// }
// ------------------------------------------------------------------------------------------------

// 8.Write a program that calculates the sum of digits of a number using a loop (e.g., 123 → 1+2+3 = 6).

// let num = 859;
// let sum = 0;
// while (num > 0) {
//     let digit = num % 10;
//     sum += digit;
//     num = Math.floor(num / 10);
// }
// console.log(sum);
// ---------------------------------------------------------------------------------------------------
/*Functions 
1. Write a named function that checks whether a string is a palindrome or not. */

// let name = "nan";
// function check(str) {
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i]
//     }
//     return str === reversed;
// }
// if (check(name)) {
//     console.log(name, "is Palindrome");
// } else {
//     console.log(name, "is not a Palindrome")
// }
// ---------------------------------------------------------------------------------------------------

// 2.Create an arrow function that returns the factorial of a given number.

// const factorial = (num) => {
//     let result = 1;

//     for (let i = 1; i <= num; i++) {
//         result *= i;
//     }

//     return result;
// };
// console.log(factorial(5));
// ------------------------------------------------------------------------------------------------------

// 3.Write an anonymous function that sorts an array of numbers in ascending order. 

// let numbers = [25, 5, 18, 42, 3];
// let sortArray = function (arr) {
//     return arr.sort(function (a, b) {
//         return a - b;
//     });
// };

// console.log(sortArray(numbers));
// ------------------------------------------------------------------------------------------------------

// 4.Create a higher-order function that takes another function as input and executes it 3 times. 

// function check(num) {
//     for (let i = 0; i < 3; i++) {
//         num();
//     }
// }
// function stu() {
//     console.log("Krishna!");
// }
// check(stu);
// ------------------------------------------------------------------------------------------------------
// 5. Write a program where a function returns another function that adds a specific number to its argument 
// (closure). 

// function add(x) {
//     return function(y) {
//         return x + y;
//     };
// }
// let a = add(5);
// let b = add(10);

// console.log(a(3));
// console.log(b(7));
// ----------------------------------------------------------------------------------------------------------

// 6.Demonstrate first-class functions by storing multiple functions in an array and calling them one by one. 

// function a() {
//     console.log("Hello!");
// }

// function b() {
//     console.log("Hi!");
// }

// function c() {
//     console.log("Bye!");
// }
// let allFun = [a, b, c];

// for (let check of allFun) {
//     check();
// }
// --------------------------------------------------------------------------------------------------------------

// 7.Write a function that takes two numbers and a callback function, and applies the callback to those 
// numbers (e.g., addition, subtraction). 

// function check(a, b, callback) {
//     return callback(a, b);
// }
// function add(x, y) {
//     return x + y;
// }

// function sub(x, y) {
//     return x - y;
// }
// console.log(check(15, 7, add));
// console.log(check(21, 3, sub));
// -------------------------------------------------------------------------------------------------------------

// 8.Create a program where you use a default parameter to calculate compound interest (default interest 
// rate if not provided).

// function cI(p, t, r = 5) {
//     let amount = p * Math.pow((1 + r / 100), t);
//     return amount.toFixed(2);
// }
// console.log(cI(1000, 2)); 
// console.log(cI(1000, 3, 7)); 
// ---------------------------------------------------------------------------------------------------------------