
function greet(name , pass){
    if (name == "jbk" && pass == "true") {
        console.log("welcome to TKA")
    } else {
        console.log("Not TKA user")
    }
}

function m(num){
    return num
}

m("learning return")

console.log(m())

greet("jbk" , 123)

// in JS == compares values with not respect to datatype
// in JS === compares values with respect to datatype

v = 32 

do{
   v += 6 
}
while(v < 40)
console.log(v)