
let proceed=(event)=>{
    event.preventDefault();
    let cardnum=1234567812345678;
    let cvv=123;
    let expiry="02/26";
    let enterednum=document.querySelector("#cardno").value;
    let enteredcvv=document.querySelector("#cvv").value;
    let enteredexpiry=document.querySelector("#date").value;
    
    if(enterednum==cardnum && enteredcvv==cvv && enteredexpiry==expiry){
         window.location.href="../otp+thankyou/otp.html";
        }else{
            alert("Invalid Credentials!");
            document.querySelector("#cardno").value="";
            document.querySelector("#cvv").value="";
            document.querySelector("#date").value="";
          }  
    }
    document.querySelector("form").addEventListener("submit",proceed);

    let x=localStorage.getItem("cart-amount")||[];
    console.log(x)
    document.querySelector("#amt1").innerHTML=x;
    document.querySelector("#amt2").innerHTML=x;

    


    let cartitem =JSON.parse(localStorage.getItem("cartPage")) || [];
    // document.querySelector("#quanT").innerHTML=cartitem.length;

    let details = JSON.parse(localStorage.getItem("AddData"))||[];
    console.log(details);

    details.forEach(function(el){

      let name = document.querySelector("#Name").innerText = el.Name;
    console.log(name)

    let address = document.querySelector("#address").innerText = el.Addresss;
    console.log(address)

    let mobile = document.querySelector("#mobile").innerText = el.phone;
    console.log(mobile)

    });
