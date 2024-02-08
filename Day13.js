
var fruits = ["Mango", "Banana", "Orange", "Strawberry"]
for(frt of fruits){
    //var h2 = document.getElementById("msg");
    //h2.innerHTML = "Hi i am Sham"

    document.getElementById("msg").innerHTML += frt + "<br>"
}




// function change(){
//     var h1 = document.querySelector(".head")
    
//     h1.innerHTML = "Learning DOM... "
//     h1.style.backgroundColor = "yellow"
// }


function change(){
    var h1 = document.querySelector(".head")
if (h1.innerHTML == "Day 13 - Introduction to DOM") {
    h1.innerHTML = "Learning DOM... "
    h1.style.backgroundColor = "red"
    
 } else if(h1.innerHTML == "Learning DOM...") {
    h1.innerHTML ="Dom Manipulation"
    h1.style.backgroundColor ="grey"
 } 
else {
    h1.innerHTML = "Day 13 - Introduction to DOM"
    h1.style.backgroundColor = "yellow"
}
   
}