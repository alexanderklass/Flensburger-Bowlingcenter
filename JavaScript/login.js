var data = [
    {
        username: "christian",
        password: "ChrisAdmin"
    },

    {
        username: "marlon",
        password: "fettevollmilf88"
    },

    {
        username: "nico",
        password: "mitarbeiter1"
    }
]

function check(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    for (i = 0; i < data.length; i++){
        if(username == data[i].username && password == data[i].password){
            window.location.href = "mitarbeiterportal.html";
            return
        }
    
    }
    alert("Benutzername oder Passwort ist falsch");
}

