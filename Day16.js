
let c = 0

var Images = ["Images/IMG_20230723_124317.jpg" , "Images/IMG_20230723_124317.jpg" ,"Images/IMG_20230723_124317.jpg" ]

function changeimage(){
    c (c+1)
    document.getElementById("changeimage").innerHTML = <img src='"+Images[c]+"'></img>
}