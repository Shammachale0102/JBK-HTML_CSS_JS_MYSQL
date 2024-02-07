a = "sham"
console.log(a)

var fruits = ["Mango", "Banana", "Orange", "Strawberry"]
for(frt of fruits){
    //var h2 = document.getElementById("msg");
    //h2.innerHTML = "Hi i am Sham"

    document.getElementById("msg").innerHTML += frt + "<br>"
}

function change(){
    var h1 = document.querySelector(".head")
    
    h1.innerHTML = "Learning DOM... "
    h1.style.backgroundColor = "orange"
}