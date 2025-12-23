let a = [{
    name: "Krishna",
    age: 25,
    id: 1
},
{
    name: "Ram",
    age: 21,
    id: 2
},
{
    name: "Shyam",
    age: 20,
    id: 8
},
{
    name: "Jadu",
    age: 28,
    id: 5
}]
let b = a.filter((item)=>{
    return item.id !== 2;
})
console.log(b);