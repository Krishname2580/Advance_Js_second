// let a = 56;
// if(typeof(a) == "number"){
   

// if(a>=90 && a<=100){
//     console.log("Grade = A");
// }
// else if(a>=80 && a<90){
//     console.log("Grade = A+");
// }
// else if(a>=60 && a<80){
//     console.log("Grade = B");
// }
// else if(a>=40 && a<60){
//     console.log("Grade = C");
// }
// else if(a>0 && a<40){
//     console.log("Grade = D");
// }
// else{
//     console.log("Invalid number");
// }
// }
// else{
//     console.log("Absent");
// }
// let year = 2004;
// if(typeof(year)=="number"){
//     if(year%4==0 && year%100==0 &&year%400==0){
//         console.log(year, " is leap year");
//     } else {
//         console.log(year, " is not leap year");
//     }
// }
// else{
//     console.log("Enter valid year");
// }
// let a = "10";
// if(typeof(a)==="number"){
//     if(a%2==0){
//         console.log(a," is a even number & type is number");     //LEAP YEAR
//     } else{
//         console.log("Odd number & type is number")
//     }
// }

// let b = 10;
// console.log("Type is ", typeof(a));
// --------------------------------------------------------------------------------
//POPULATION

// const places = [
//   { area: "Kolkata",   population: 60000 },
//   { area: "Midnapur", population: 55000 },
//   { area: "C.K.Road", population: 35000 },
//   { area: "Durgapur",  population: 30000 },      
//   { area: "Malda",    population: 42000 }
// ];

// for(i=0;i<places.length;i++){
//     if(places[i].population<50000){
//         console.log(places[i]);
//     } 
// }

// -----------------------------------------------------------------------
        //LARGEST NUMBER

// let a = 10;
// let b = 15;
// let c = 20;

// if (a >= b && a >= c) {
//   console.log("Largest number is", a);           
// } else if (b >= a && b >= c) {
//   console.log("Largest number is", b);
// } else {
//   console.log("Largest number is", c);
// }

// ---------------------------------------------------------------------------
        // CALCULATOR

// let a = 10;
// let b = 20;
// let operator = "/";
// let result;

// if (operator === "+") {
//   result = a + b;
// } else if (operator === "-") {
//   result = a - b;
// } else if (operator === "*") {
//   result = a * b;                                                   
// } else if (operator === "/") {
//   result = a / b;
// } else {
//   result = "Invalid operator!";
// }

// console.log("Result: " + result);

// ------------------------------------------------------------------------------
            // EVEN NUMBERS

// let i;

// for(i=1;i<=50;i++){
//     if(i%2==0){
//         console.log(i);                              
//     }
// }

// -----------------------------------------------------------------------------
                //  ARRAY ODD NUMBERS
    
// let n = [11, 17, 18, 21, 16];


// for(let i of n){
//     if(i%2!=0){
//         console.log(i);             
//     }
// }
// ------------------------------------------------------------------------
                // OBJECT-KEY-VALUE

// let student ={
//     name: "Krishna",
//     age: 21,
//     course: "Web Development",           
//     city: "Kolkata"
// };
// for(let key in student){
//     console.log(key, ": ",student[key]);
// }
// ------------------------------------------------------------
            // SUM OF DIGIT

// let n = 659;
// let sum = 0;

// for(let temp = n; temp>0; temp = Math.floor(temp/10)){
//     let digit = temp%10;
//     sum += digit;
// }
// console.log("The sum of ", n, "is: ", sum);