// const a={
//     name: "krishna", age: 25
// }
// console.log(Object.keys(a));
// console.log(Object.values(a));
// console.log(Object.entries(a));
// ---------------------------------------------------------------------

// let obj = {
//     name: 'Sourav',
//     age: 23,
//     gender: 'male'
// };

// Object.defineProperty(obj, 'country', {
//     value: 'India',
//     enumerable: true
// });

// console.log(obj.country); 
// console.log(Object.keys(obj));

// -----------------------------------------------------------------------------

// let obj = {
//     name: 'Sourav',
//     age: 23
// };

// Object.defineProperty(obj, 'status', {
//     value: 'active',
//     writable: true,
//     configurable: true,
//     enumerable: false
// });

// obj.status = 'inactive'; 
// console.log(obj.status);
// console.log(Object.keys(obj));

// ---------------------------------------------------------------

// 1: Create an object using Object.create()

// const a = {
//   name: "Krishna",
//   age: 25
// };

// const b = Object.create(a);
// console.log(b.name);
// -------------------------------------------------------------------

// 2.Hide a property using defineProperty

// let user ={
//     name: "Krishna",
//     age: 25
// }
// Object.defineProperty(user, "password", {
//   value: "12345",
//   enumerable: false
// });
// console.log(user.password);
// console.log(Object.keys(user));
// -----------------------------------------------------------------------

// 3.Add a property status: "active" with writable: false,Test writable

// let user ={
//     name: "Krishna",
//     age: 25
// }
// Object.defineProperty(user, "status", {
//   value: "active",
//   writable: false
// });

// console.log(user.status);
// user.status = "inactive";  
// console.log(user.status);   
// -------------------------------------------------------------------------

// 4.Test configurable Task:Create a property with configurable: true, then delete it.


// let user ={
//     name: "Krishna",
//     age: 25
// }
// Object.defineProperty(user, "status", {
//   value: "update",
//   configurable: true
// });
// // console.log(user.status);
// delete user.status;
// console.log(user.status);
// -------------------------------------------------------------------------------

// 5.Freeze an object and try to change a property.

// let user ={
//     name: "Krishna",
//     salary: 10000
// }
// Object.freeze(user);

// user.salary = 15000;
// console.log(user.salary);
// ---------------------------------------------------------------------------------

// 6.Seal an object and check if you can add new properties.

// const student= {
//     name: "Krishna",
//     id: 1152,
//     batch: "A"
// }
// Object.seal(student);

// student.id = 1166;
// student.stream = "CSE";
// console.log(student);
// ---------------------------------------------------------------------------------