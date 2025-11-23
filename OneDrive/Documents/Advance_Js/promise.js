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

