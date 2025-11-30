// let a = new Promise((resolve, reject) => {
//   resolve("nill");
// });

// a.then(() => console.log(true)).catch(() => console.log(false));

// console.log(a);
// -------------------------------------------------------------

// let checkEven = new Promise((resolve, reject) => {
//     let number = 4;
//     if (number % 2 === 0) resolve("The number is even!");
//     else reject("The number is odd!");
// });
// checkEven
//     .then((message) => console.log(message))
//     .catch((error) => console.error(error)); 

// console.log(checkEven);
// ---------------------------------------------------------------

// let a = new Promise((resolve,reject)=>{
//     let num = 5;
//     if(num %2==0)setTimeout(()=>resolve("The number is even"),3000);
//     else setTimeout(()=>reject("The number is odd"),3000);
// });
// let b = new Promise((resolve,reject)=>{
//     let num = 5;
//     if(num %2==0)setTimeout(()=>resolve("The number is even"),5000);
//     else setTimeout(()=>reject("The number is odd"),5000);
// });
// a.then((message)=> console.log(message)).catch((error)=>console.log(error));

// ------------------------------------------------------------------


// let a = new Promise((resolve,reject)=>{
//     resolve("Hi");
// });
// let b = new Promise((resolve,reject)=>{
//     resolve("Hello");
// });

// Promise.all([
//     a,b
// ])
//     .then((results) => console.log(results))
//     .catch((error) => console.error(error));
// -------------------------------------------------------------------------------

// -------------------------------------------------------------------------------

// let myVal = new Promise((resolve,reject)=>{
//     let random = Math.random();

//     if(random>0.5){
//         resolve("Success!");
//     } else{
//         reject("Error!");
//     }
// });
// myVal.then((msg)=>console.log(msg)).catch((error)=>console.log(error));
// -------------------------------------------------------------------------------------------

// new Promise((resolve, reject) => {
//     resolve(5);               
// })
// .then(num => {
//     return num * 2;
// })
// .then(num => {
//     return num + 10; 
// })
// .then(finalValue => {
//     console.log(finalValue);
// });
// ------------------------------------------------------------------------------------------

// let a = new Promise(resolve => {
//     setTimeout(() => resolve("Hii!"), 1000);
// });
// let b = new Promise(resolve => {
//     setTimeout(() => resolve("Hello!"), 2000);
// });
// let c = new Promise(resolve => {
//     setTimeout(() => resolve("Bye"), 3000);
// });

// a.then((result)=>console.log(result));
// Promise.all([a,b,c]).then((results) => console.log(results));
// -----------------------------------------------------------------------------------------------

// function readFile(filename) {
//   return new Promise((resolve, reject) => {
//     if (!filename) {
//         reject("Filename is empty!");
//         return;
//         }
//     setTimeout(() => {
//         resolve(filename);
//         }, 2000);
//     });
//     }
// readFile("data.txt").then(msg => console.log(msg)).catch(err => console.log(err));

// readFile("").then(msg => console.log(msg)).catch(err => console.log(err));
// ------------------------------------------------------------------------------------------------

// let a=new Promise((reject)=>{
//     setTimeout(()=>{
//         reject("Requested time out");
//     },3000);
// });
// a.then((result)=> console.log(result)).catch((error)=>console.log(error));
// --------------------------------------------------------------------------------------------------