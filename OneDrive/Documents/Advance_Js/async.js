// function hello(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Hello buddy");
//         },2000);
//     });
// }
// function hell(){
//     return "No buddy";
// }
// async function hel(){
//     try{
//         let a = await hello().then(()=> hell());
//         console.log(a)
//         return a;
//     } 
//     catch{
//         console.log("Error!");
//     }
// }
// console.log(hel());
// -------------------------------------------------------------------------------------

// async function hello(){
//     try{
//         let response = await fetch("https://dummyjson.com/products/search?q=phone");

//         if(!response.ok){
//             return ("Failed to fetch data!");
//         }
//         let data = await response.json();
//         console.log(data);
//     } catch{
//         console.log("Error!");
//     }
// }
// console.log(hello());
// --------------------------------------------------------------------------------------
        // shallow copy
// let a= {
//     a:1,
//     b:2,
//     c: {
//         n: 2,
//         m: {
//             v: 4,
//         },
//     },
// }
//  let b ={...a};
//  b.c.m.v = 12

//  console.log(a);
//  console.log(b);
// ----------------------------------------------------------------------------------
            // deep copy
let a= {
    a:1,
    b:2,
    c: {
        n: 2,
        m: {
            v: 4,
        },
    },
}
 let b = JSON.parse(JSON.stringify(a))
 
 b.c.m.v = 12

 console.log(a);
 console.log(b);