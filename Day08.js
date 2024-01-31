a = 10;
a = 20;
a = "Sham"

var b = "var b"

b = 10

var b = "2th var b"

var b = "3th var b"
b = "4th"

let d="sham"
d = 55
d = 67

const c=100

console.log(a)
console.log(b)
console.log(d)
console.log(c)
 
x = 10
y = "js"
z = true
m = 70.80
console.log( typeof x)
console.log(typeof (y))
console.log(typeof z)
console.log(typeof (m))

js ="global"
 function greet(){
 js = "local"

  console.log(js)
  console.log(this.js)
 }

  greet()

  js ="global"
 function not(){
 var js = "local"

  console.log(js)
  console.log(this.js)
 }

  not()