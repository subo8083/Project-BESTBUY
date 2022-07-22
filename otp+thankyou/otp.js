

// alert("your one time password is 123456. Do not share with anyone!");
let otpFun=(event)=>{
   let c=0;
   event.preventDefault();

   let storedOTP = "123456";
   let enteredOTP = document.querySelector("#input").value;
   if (enteredOTP == storedOTP) {
       
      let x=setInterval(function(){
         swal("Payment Successful!");
         if(c==3)
         {
            clearInterval(x)
            window.location.href = "thankyou.html";
         }
         c++
      },1000)
      
   } else {
      swal("Invalid OTP!");
         
   }
}
let submit = document.querySelector("button");

submit.addEventListener("click", otpFun);

