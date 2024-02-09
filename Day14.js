function login(){

    var uName=document.getElementById("mail").value;
    var pwd=document.getElementById("pass").value;
    var h3=document.getElementById("msg");

    if(uName==""){
        h3.innerHTML="Enter Username";
        h3.style.color="red"
    } else if(pwd==""){
        h3.innerHTML="Enter Password";
        h3.style.color="red"
    }else{
        if(uName=="jbk"&&pwd=="123"){
            h3.innerHTML="Login successfully"
            h3.style.color="green"
        }else{
            h3.innerHTML="Incorrect Username OR Password"
            h3.style.color="red"
        }
    }

}
