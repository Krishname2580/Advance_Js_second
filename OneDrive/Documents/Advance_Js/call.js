let a = {person: "krish"};
let b = {person: "subha"};

// function n(age,address){
//     console.log(`I am ${this.person} & age is${age} & city ${address}`);
// }
// n.call(a, 25, "Kolkata");

// n.call(b, 26, "Medinipur");

// ------Apply-----------

// function n(age,address){
//     console.log(`I am ${this.person} & age is${age} & city ${address}`);
// }
// n.apply(a,[20,"Garhbeta"]);
// n.apply(b,[28,"Radhanagar"]);

// -------Bind------------

function n(age,address){
    console.log(`I am ${this.person} & age is ${age} & city ${address}`);
}

let m = n.bind(a, 25, "Kolkata");
let x = n.bind(b, 26, "Medinipur");

m();
x();