// // let a = [1,2,3,4,5,6,7,8,9,10];
// // let b = a.slice(0,2);
// // let c = a.slice(2,4);
// // let d = a.slice(4,6);
// // let e = a.slice(6,8);
// // let f = a.slice(8,10);

// // console.log(b);
// // console.log(c);
// // console.log(d);
// // console.log(e);
// // console.log(f);

// let a = [1,2,3,4,5];
// // let b = a.splice(2,2);
// // console.log(a);
// let c = a.splice(2,0,10,11);
// console.log(a);
// // -----------------------------------------------------------

// // let a = [1,2,3,4,5,6,7,8];
// // let b = a.filter(function(item){
// //     return item<7;
// // })
// // console.log(b);
// -----------------------------------------------------------

// // let a = ["Hansda", "Gopal", "Aritra", "Deb"];
// // let b = a.filter((item)=>{                       //FILTER return multiple values
// //     return item.length>4;
// // })
// // console.log(b);
// -----------------------------------------------------------
//FIND just return first value

// // let a = ["Hansda", "Gopal", "Aritra", "Deb","Tony","Ram"];
// // let b = a.find((item)=>{
// //     return item.includes("a");                  
// // })
// // console.log(b);
// -----------------------------------------------------------
// Repeation delete

// let a = [1,1,2,2,3,4,5];
// let b = [];
// for(let i=0;i<a.length;i++){
//     let exists = false;

//     for(let j=0;j<b.length;j++){
//         if(a[i]===b[j]){
//             exists = true;
//             break;
//         }
//     }
//         if(!exists){
//         b.push(a[i]);
//     }
// }
// console.log(b);
// -----------------------------------------------------------
        // Addition
        
// const cart = [
//   {item: "Shirt", price: 500 },
//   {item: "Pant", price: 800 },
//   {item: "Shoes", price: 1200 }
// ];                                                                   

// const total = cart.reduce((sum, product) => 
//               sum + product.price, 0);

// console.log("Total Price:", total);

// -----------------------------------------------------------


// const nested = [[1, 2], [3, 4], [5, 6]];

// const singleArray = nested.reduce((acc, curr) => acc.concat(curr), []);      // Single Array

// console.log(singleArray);
// -----------------------------------------------------------

// const students = [
//   { name: "Rahul", grade: "A" },
//   { name: "Riya", grade: "B" },
//   { name: "Amit", grade: "A" }
// ];
// const b=students.reduce((acc,cur)=>{                                         // Grade
//     (acc[cur.grade]=acc[cur.grade]||[]).push(cur.name);
//     return acc;
// },{});
// console.log(b);              

// ------------------------------------------------------------

// console.log(Math.floor((Math.random())*5)+1);

// console.log(Math.floor(Math.random()*(10-6+1)+6));