// var form = document.querySelector("form");
// var userData = JSON.parse(localStorage.getItem("nykaauserdata")) || []
// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     var data = {
//         name: form.name.value,
//         number: form.num.value,
//         email: form.email.value,
//         password: form.pass.value,

//     }
//     if (checkEmail(data.email) == true) {
//         userData.push(data);
//         localStorage.setItem("bestbuyuserdata", JSON.stringify(userData));
//         alert("signup sucessfully")
//         window.location.href = "login.html"

//     } else {
//         alert("Email already exist")
//     }

// })

// function checkEmail(email) {
//     var filter = userData.filter(function(el) {
//         return email == el.email
//     })
//     if (filter.length > 0) {
//         return false;
//     } else {
//         return true;
//     }
// }

async function Register(e){
    e.preventDefault()


    let formdata={
        name:document.getElementById("name").value,
        phone:document.getElementById("num").value,
        email:document.getElementById("email").value,
        password:document.getElementById("pass").value,
    }
    let body1=JSON.stringify(formdata);
    let apiID="https://masai-api-mocker.herokuapp.com/auth/register";

    let response=await fetch(apiID,{

        method:"POST",
        body:body1,
        headers:{
            "Content-Type":"application/json",
        }


    })
    let data=await response.json();
    console.log(data);
}




function LOGINFuncTion(){
    window.location.href="login.html"
}
