// function fetchData(url) {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then((response) => {
//         if (!response.ok) {
//           reject("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => resolve(data))
//       .catch((error) => reject(error));
//   });
// }

// fetchData("https://jsonplaceholder.typicode.com/post")
//   .then((data) => {
//     console.log("Fetched data:", data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
// ------------------------------------------------------------

// function fetchData(url) {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then((response) => {
//         if (!response.ok) {
//           reject("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => resolve(data))
//       .catch((error) => reject(error));
//   });
// }
// fetch("https://dummyjson.com/products/search?q=phone")
//     .then((data) => {
//         console.log("Fetched data:", data);
//     })
//     .catch((error) => {
//         console.error("Error:", error);
//     });
// ----------------------------------------------------------------

let a = new Promise((resolve,reject)=>{
    reject("FAILED");
})
let b = new Promise((resolve,reject)=>{
    reject("FAILED");
})
let c = new Promise((resolve,reject)=>{
    setTimeout(()=> resolve("SUCCESS"),3000);
})
let d = new Promise((resolve,reject)=>{
    setTimeout(()=> resolve("GAINED"),1000);
})
let e = new Promise((resolve,reject)=>{
    reject("FAILED");
})
let x =[a,b,c,d,e];
Promise.any(x).then((val)=>console.log(val));