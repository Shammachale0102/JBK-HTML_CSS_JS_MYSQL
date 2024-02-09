
let counter=0;
function change(){
    counter++;
    var h1=document.getElementById("head");
    if (h1.innerHTML=="Day 13 - Intro to DOM") {
        h1.innerHTML="Changed Day 13"
        h1.style.backgroundColor="red"
        
    } else if(h1.innerHTML=="Changed Day 13") {
        h1.innerHTML="It's Third Time Change";
        h1.style.backgroundColor="grey";
        
    }else{
        h1.innerHTML="Day 13 - Intro to DOM";
        h1.style.backgroundColor="yellow"
        
    }
    document.getElementById("count").innerHTML="Button Clicked "+counter +" Times";
}