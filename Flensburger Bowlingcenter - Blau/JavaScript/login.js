function check(){
    let login_name = document.getElementById("name").value;
    let login_password = document.getElementById("password").value;
    
    if (login_name && login_password == "admin"){
        window.location.href = "mitarbeiterportal.html";
    }
    else{
        alert("passwort oder name sind falsch")
    }
}

