import carousal from "./carousal.js";

document.getElementById("carousal").innerHTML=carousal()

const url=`https://suranjanachary.github.io/db/db.json`

let getData=async()=>{
let res=await fetch(url);
let data=await res.json();
appendData(data.products.personalSpace)
console.log(data.products)
}
getData()
let appendData=(data)=>{
data.forEach(function(el){

    let card=document.createElement("div");
    card.setAttribute("id","card")

    // let logo_div= document.createElement("div");

    // let logo=document.createElement("img");
    // logo.src=el.logo;
    // logo.setAttribute("class","logos")

    let img=document.createElement("img");
    img.src=el.image; 
    img.setAttribute("class","images")

    let desc=document.createElement("h5");
    desc.innerText=el.desc1;    

    let but=document.createElement("button");
    but.setAttribute("id","buy");
    but.innerText="Buy Now"
    but.addEventListener("click",clickme)

    // logo_div.append(logo)

    card.append(img,desc,but)
    document.getElementById("res").append(card)

})
}

function clickme(){
window.location.href="Dummy.html"
}