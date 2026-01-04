// class person{
//     constructor(name,age, place){
//         this.name = name;
//         this.age = age;
//         this.place = place;
//     }
//     greet(){
//         console.log(`Hello, I'm ${this.name} & my age is ${this.age} & live in ${this.place}`);
//     }
// }
// const data = new person("Krish", 25, "Kolkata");
// data.greet()
// -----------------------------------------------------

// class num{
//     constructor(n1,n2){
//         this.n1 = n1;
//         this.n2 = n2;
//     }
//     result(){
//         console.log(`Multiplication is:  ${this.n1*this.n2}`);
//     }
// }
// const data = new num(10,20);
// data.result();
// ----------------------------------------------------------

class animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} make a sound`);
    }
}
class Dog extends animal{
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }
    speakk(){
        console.log(`${this.name} barks. breed: ${this.breed}`);
    }
}
const dog = new Dog("Tommy", "German Shepherd");
dog.speakk();