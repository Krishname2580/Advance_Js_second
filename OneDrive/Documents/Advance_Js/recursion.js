// function hello(item) {
//   console.log(item);
//   if (item === 1) {
//     return 1;
//   } else {
//     return item * hello(item - 1);
//   }
// }

// let b = 5;
// let v = hello(b);
// console.log(v);
// -------------------------------------------

// function hello(item) {
//   if (item === "") {
//     return "";
//   } else {
//     return hello(item.substring(1)) + item[0];
//   }
// }

// let b = "hello";
// let v = hello(b);
// console.log(v);
// ---------------------------------------------------

// const categories = [
//     {
//         name: "Electronics",
//         sub: [
//             { name: "Laptop", sub: [] },
//             { name: "Mobile", sub: [] },
//         ],
//     },
//     {
//         name: "Clothes",
//         sub: [
//             {
//                 name: "Men",
//                 sub: [
//                     { name: "Shirts", sub: [] },
//                     { name: "Pants", sub: [] },
//                 ],
//             },
//             { name: "Women", sub: [] },
//         ],
//     },
// ];

// function hello(item) {
//     item.forEach((element) => {
//         console.log(element.name);
//         hello(element.sub);
//     })
// }
// hello(categories);
// ----------------------------------------------------------------------