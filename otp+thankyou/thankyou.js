// import { navbar, count_cart, takequery, show_log_menu,showmenu} from "../navbar.js"

// document.getElementById("navbar").innerHTML=navbar()



let popup=document.getElementById("popup");
let cont=document.getElementById("cont")
// coun(openpopup,5000)
// {
//     let x=document.createElement("img")
//     x.src="https://c.tenor.com/AmALF78zapsAAAAC/what-processing.gif"
//     cont.append(x)
// }

function openpopup(){
    cont.innerHTML=""
    popup.classList.add("open-popup");
    
}
function openpopy(){

    let x=document.createElement("img")
    x.setAttribute("id","imag")
    x.src="https://pmcontent.pridemobility.com/images/processing.gif"
    cont.append(x)
    coun(openpopup,5000)
}

function closepopup(){
    // popup.classList.remove("open-popup");
    window.location.href="../Home/index.html"
}





function coun(func,delay){
    let id;
  if(id)
  {
    clearTimeout
  }
   id=setTimeout(function(){
    func()

  },delay)
}

