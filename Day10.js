var person = {
    id : 123,
    name : "Sham",
    age : 21
}
console.log(person);


function Employee(id, name, salary){
    this.id = id,
    this.name = name,
    this.salary = salary;
}
e1 = new Employee(25, "Sham", "10000000")
e2 = new Employee(44, "Ram", 10000000)

console.log(e1);
console.log(e2);


// Dialogue boxes==> 3types:

// var a = alert("I'm just message...")
// console.log(a);

// var a = confirm("Do you want to proceed ?")
// if(!a){
//     // window.location.href = "cancel.html"
//     window.open("cancel.html", "_blank")
// }
// console.log(a);

var a = prompt("Write your text here..")
console.log(a);


var fruits = ["Mango", "Banana", "Orange", 5, "Grapes"]
console.log(fruits);