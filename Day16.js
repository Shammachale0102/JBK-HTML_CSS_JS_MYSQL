
let c = 0

var images = ["Images/IMG_20230723_124317.jpg" , "Images/IMG_20230723_124545.jpg" ,"Images/IMG_20230723_180841.jpg" ]

function changeimg(){
    c = (c+1) % images.length;
    document.getElementById("changeimage").innerHTML= "<img src='"+images[c]+"'>"
}