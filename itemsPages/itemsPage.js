

 let x=JSON.parse(localStorage.getItem('cart-items')) || [];
 let y=JSON.parse(localStorage.getItem('saved-items')) || [];


appendData = (data) => {
    let container=document.getElementById('items');
    data.forEach( (element) => {
        let div=document.createElement('div');

        let div1=document.createElement('div');
        let img=document.createElement('img');
        img.src=element.image;
        let details=document.createElement('button');
        details.innerText="View Details";
        div1.append(img, details);

        let div2=document.createElement('div');
        let a=document.createElement('a');
        a.setAttribute('href','');
        let p1 =document.createElement('p');
        p1.innerText=element.desc2;
        a.innerHTML=p1.innerText;
        let p2=document.createElement('p');
        p2.innerText=`Model: ` +`${element.Model}`;
        let p3=document.createElement('p');
        p3.innerText=`SKU: ${element.SKU}`;
        let rating=document.createElement('h6');
        rating.innerText=`Ratings: ${element.rating} / 5`;
        let p4=document.createElement('h5');
        p4.innerText="Get it Today"
        let h61=document.createElement('h6');
        h61.innerText="Pickup:";
        let p5=document.createElement('p');
        p5.innerText="Order now for pickup";
        let h62=document.createElement('h6');
        h62.innerText="Shipping:";
        let p6=document.createElement('p');
        p6.innerText="Available in your area";
        div2.append(a, p2, p3, rating, p4, h61, p5, h62, p6);
        
        let div3=document.createElement('div');
        let price=document.createElement('h4');
        price.innerText=`Price: $${element.price}`;
        let save=document.createElement('button');
        save.setAttribute('id', 'save');
        save.innerText=`Save $${element.save}`;
        let newPrice=document.createElement('h4');
        newPrice.setAttribute('id', 'newPrice');
        newPrice.innerText=`New Price: $${element.newPrice}`;
        let addItem=document.createElement('button');
        addItem.setAttribute('id', 'add-item');
        addItem.innerText="Add To Cart"
        addItem.addEventListener('click', function(){
            x.push(element);
            localStorage.setItem('cart-items', JSON.stringify(x));
            alert('Item Added to card Successfully');
        })
        let saveItem=document.createElement('button');
        saveItem.setAttribute('id', 'save-item');
        saveItem.innerText="Save Item";
        saveItem.addEventListener('click', function(){
            y.push(element);
            localStorage.setItem('saved-items', JSON.stringify(y));
            alert('Item Saved Successfully'); 
        })
        div3.append(price, save, newPrice, addItem, saveItem);
        
        div.append(div1, div2, div3);
        let hr=document.createElement('hr');
        container.append(div, hr);

    });
}

getData= async () =>{
    const url=`https://suranjanachary.github.io/databasev2/db.json`
    // 
    try{
        let res = await fetch(url);
        let data=await res.json();
        let laptops = data.products.laptops;
        // console.log(laptops);
        localStorage.setItem('laptops', JSON.stringify(laptops));
        appendData(laptops);
    }catch(err){
        console.log("Error: "+err);
    }
}
getData();




let sorting = () =>{
    let laptops = JSON.parse(localStorage.getItem('laptops')) || [];
    
    let items=document.querySelector('#items');
    if(srt.value=="lowToHigh"){
        items.innerHTML=null;
        appendData(laptops.sort(function(a,b){
            return +a.newPrice- +b.newPrice;
        }))

    }
    else if(srt.value=="highToLow"){
        items.innerHTML=null;
        appendData(laptops.sort(function(a,b){
            return +b.newPrice- +a.newPrice;
        }))
    }
    else if(srt.value=="HighToLow"){
        items.innerHTML=null;
        appendData(laptops.sort(function(a,b){
            return +b.rating- +a.rating;
        }))
    }
    else if(srt.value=="LowToHigh"){
        items.innerHTML=null;
        appendData(laptops.sort(function(a,b){
            return +a.rating- +b.rating;
        }))
    }
}






