var data = JSON.parse(localStorage.getItem("bestbuyuserdata"))
document.querySelector("form").addEventListener("submit", mylogin)
    // console.log(data[0].email)
function mylogin() {
    event.preventDefault()
    checkUser();
}

function checkUser() {
    let uname = document.querySelector("#email").value;
    let upasw = document.querySelector("#pass").value;
    let is = false;
    for (var i = 0; i < data.length; i++) {
        if (uname == data[i].email && upasw == data[i].password) {
            is = true;
            let NAMEE=data[i].name;
            localStorage.setItem("userNAMEE",NAMEE)

        }
    }
    if (is) {
        // alert("Login sucessfully")

            //localStorage.setItem("user",)
             window.location.href="index.html"


    } else {
        alert("Wrong password")
    }
}