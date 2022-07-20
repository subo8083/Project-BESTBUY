

async function getData(){
    let res=await fetch("https://suranjanachary.github.io/db/db.json");
    let data=await res.json();
    appendData(data.products.headphones)
    console.log(data.products)
}

getData()

let appendData=(data)=>{
    

    data.forEach(function(el){
        let card= document.createElement("div");

        let img=document.createElement("img");
        img.src=el.image;

        let logo=document.createElement("img");
        logo.src=el.logo;

        let desc1=document.createElement("p");
        desc1.innerText=el.desc1;

        let desc2=document.createElement("p");
        desc2.innerText=el.desc2;

        let price=document.createElement("p");
        price.innerText=el.price;

        let addon=document.createElement("p");
        addon.innerText=el.addon;

        card.append(img,logo,desc1,desc2,price,addon);
       document.getElementById("res").append(card)

    })

}

