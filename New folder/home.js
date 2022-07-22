
var order = document.querySelector("#order").addEventListener("click",showFunction)
var close = document.querySelector("#close1").addEventListener("click",hideFunction)
var box = document.querySelector("#order-content");
var Orderstatus = document.querySelector("#order-status");
function showFunction()
{
    box.style.opacity="1";
    Orderstatus.style.height="700px";
    Orderstatus.style.backgroundColor="rgba(0,0,0,0.3)";
    
}
function hideFunction()
{
    box.style.opacity="0";
    Orderstatus.style.backgroundColor="transparent";
    Orderstatus.style.height="0";
}
function clickfunction()
{
    window.location.href="bestbuy/besbuy HTML/account.html";
}


var saved = document.querySelector("#saved").addEventListener("click",orderFunction)
var close2 = document.querySelector("#close2").addEventListener("click",hideOrderFunction)
var box2 = document.querySelector("#saved-content");
var save = document.querySelector("#saved-items");
function orderFunction()
{
    box2.style.opacity="1";
    save.style.height="700px";
    save.style.backgroundColor="rgba(0,0,0,0.3)";
    Orderstatus.style.height="0";
    Orderstatus.style.backgroundColor="transparent";
    box.style.opacity="0";
    
}
function hideOrderFunction()
{
    box2.style.opacity="0";
    // box.style.opacity="0";
    save.style.backgroundColor="transparent";
    // Orderstatus.style.backgroundColor="transparent";
    save.style.height="0";
    // Orderstatus.style.height="0";
}

