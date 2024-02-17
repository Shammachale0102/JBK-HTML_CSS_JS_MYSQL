
let c = 0

var Images = ["Images/IMG_20230723_124317.jpg" , "Images/IMG_20230723_124545.jpg" ,"Images/IMG_20230723_180841.jpg" ]

function changeimage(){
    c (c+1) % Images.length ;
    document.getElementById("changeimage").innerHTML = <img src='"+Images[c]+"'></img>
}