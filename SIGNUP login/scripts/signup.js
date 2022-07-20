var form = document.querySelector("form");
var userData = JSON.parse(localStorage.getItem("nykaauserdata")) || []
form.addEventListener("submit", function(event) {
    event.preventDefault();
    var data = {
        name: form.name.value,
        number: form.num.value,
        email: form.email.value,
        password: form.pass.value,

    }
    if (checkEmail(data.email) == true) {
        userData.push(data);
        localStorage.setItem("bestbuyuserdata", JSON.stringify(userData));
        alert("signup sucessfully")
        window.location.href = "login.html"

    } else {
        alert("Email already exist")
    }

})

function checkEmail(email) {
    var filter = userData.filter(function(el) {
        return email == el.email
    })
    if (filter.length > 0) {
        return false;
    } else {
        return true;
    }
}




function LOGINFuncTion(){
    window.location.href="login.html"
}
