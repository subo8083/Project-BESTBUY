function navbar() {
    return ` <div id="nav1">
            <div>

            <a id="test" href="../Home/index.html">
            <img id="logo" src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/BestBuy_Logo_2020-190616.png;maxHeight=80;maxWidth=136">
            </a>
            
            <div id="menu">
            <i onclick = "showmenu()"class="fa fa-bars" style="font-size:20px"></i>
            <a  id="menuclose">Menu</a>
            <div id="options">
                <div><div class="arrow"></div><p>Deals</p> <i class="fa fa-angle-right" style="font-size:20px ; color:#0752c6"></i></div>
                <div><p>Support & Services </p> <i class="fa fa-angle-right" style="font-size:20px ; color:#0752c6 ;background-color:transparent"></i></div>
                <div><p>Brands </p> <i class="fa fa-angle-right" style="font-size:20px ; color:#0752c6 ;background-color:transparent"></i></div>
                <div><p>Featured </p> <i class="fa fa-angle-right" style="font-size:20px ; color:#0752c6 ;background-color:transparent"></i></div>
                <div><p style="color:black">Shop by Department </p></div>
                <div><p>Appliances </p> <i class="fa fa-angle-right" style="font-size:20px ; color:#0752c6 ;background-color:transparent"></i></div>
                <div><p>TV & Home Theater</p> <i class="fa fa-angle-right" style="font-size:20px ; color:#0752c6 ;background-color:transparent"></i></div>
                <div><p>Computers & Tables</p> <i class="fa fa-angle-right" style="font-size:20px ; color:#0752c6;background-color:transparent"></i></div>
                <div><p>Cameras,Camcorders & Drones</p> <i class="fa fa-angle-right" style="font-size:20px ; color:#0752c6 ;background-color:transparent"></i></div>
                <div><p>Cell Phones</p> <i class="fa fa-angle-right" style="font-size:20px ; color:#0752c6 ;background-color:transparent"></i></div>
                <div><p>Audio   </p> <i class="fa fa-angle-right" style="font-size:20px ; color:#0752c6 ;background-color:transparent"></i></div>
            </div>
            </div>
            
            <div id="searchbar">
               <input type="text" id="search" placeholder="Search Best Buy"/>
                <button style="font-family:Arial, FontAwesome;text-align: right ; color:#0752c6">&#xF002</button>
                <div id="q_append"></div>
                
            </div>
            
            
            
            </div>
            <p id="NaMe"></p>
            
            <div>
            <div id="location">
            <i class="fa fa-map-location-dot"></i>
            <a id="aiea" href="">Aiea</a>
            </div>
            
            
            <div id="cart_icon">
                <div>
                <i class="fa fa-cart-shopping" ></i>
                <p id="cart_count"></p>

               

                <a href="../cart/cart.html">Cart</a>

                </div>
                </div>
        </div></div>
          <div id="nav2">
           
                <a href="../PRODUCT PAGES(2)/laptops.html">Top Deals</a>
                <a href="#">Deals of the day</a>
                <a href="#">Totaltech membership</a>
                <a href="#">Credit card</a>
                <a href="#">Gift card</a>
                
                <a href="#" id="ac_menu"><i class="fa fa-user-o" style="font-size:13px;"> </i>  Account <i class="fa fa-angle-down" style="font-size:13px"></i></a>
                <div id="login_sign">
                    <div class="arrow2"></div>
                    <p>Becoming a My Best Buy® member comes with
                    easy order tracking, rewards, offers and more.</p>
                    <button id="logINN">Log in</button>
                    <button id="signUPP">Create Account</button>
                </div>
                 <p id="" style="color: white;">Order Status <i class="fa fa-angle-down" style="font-size:13px"></i></p>
                <p id="" style="color: white;">Saved Items <i class="fa fa-angle-down" style="font-size:13px"></i></p>
                <p style="color: white;">Recently Viewed  <i class="fa fa-angle-down" style="font-size:13px"></i></p>
               
          
        </div>`
        
}

function showmenu() {
    document.querySelector( "#options" ).style.visibility = "visible";
    console.log( '123' )
}
function mainpage() {
    window.location.href ="../../BestBuy/index.html"
}

// it is closing the menu tab if we click on 1st bar of navbar
document.addEventListener( "click", function ( event ) {
    if ( ( event.target.matches( "#nav1" ) ) && ( ( !event.target.closest( "#options" ) ) || ( !event.target.closest( "#login_sign" ) ) || ( !event.target.closest( "#q_append" ) ) ) ) {
        closehelp()
    }
},
    false );

let show_log_menu = () => {
    document.querySelector( "#login_sign" ).style.visibility = "visible";
}
function closehelp() {
    console.log(13)
    document.querySelector( "#options" ).style.visibility = "hidden";
    document.querySelector( "#login_sign" ).style.visibility = "hidden";
    document.querySelector( "#q_append" ).style.visibility = "hidden";
}
// document.querySelector( "#search" ).addEventListener( "keypress", (ele) => {
//     takequery(ele)
// } );

let araaY=[]

function takequery( ele ) {
    if ( ele.key == "Enter" ) {
        let query = document.querySelector( "#search" ).value;
        let url = 'https://suranjanachary.github.io/db/db.json';
        let container = document.querySelector( "#q_append" );
        container.style.visibility = "visible";
    fetch( url ).then( ( res ) => {
        return res.json();
    } ).then( ( res ) => {
        let data = res.products;
        query_append( data [query]);
        araaY.push(query)
    } ).catch( ( err ) => {
        console.log( err );
        document.querySelector( "#q_append" ).innerHTML = `<p style = "text-align:center ; margin-top:5%; color:gray" : center>Product not found !!</p>`;
        
    })
        
    }    
};

let query_append = ( data ) => {
    let container = document.querySelector( "#q_append" );
    
    container.innerHTML = null;
    data.forEach( ( ele ) => {
        let div = document.createElement( 'div' );
        let image = document.createElement( 'img' );
        image.src = ele.image;
        let h3 = document.createElement( 'h5' );
        h3.innerText = ele.desc1;
        let save = document.createElement( 'h4' );
        if ( ele.save == undefined ) {
            save.innerText = "View";
        } else {
            save.innerText = `Save ${ ele.save }`; 
        }
        
        div.addEventListener("click",function(){

            showing()
        })
        div.append( image, h3, save );
        container.append( div );
    } );
    
    console.log(data)
}



let count_cart = () => {
// <<<<<<< HEAD
    let cart_count = JSON.parse( localStorage.getItem( 'cart-items' ) ) || [];
    if ( cart_count.length > 0 ) {
        document.querySelector( "#cart_count" ).style.visibility = 'visible';
        document.querySelector( "#cart_count" ).innerText = cart_count.length;
        // window.location.reload();
    } else {
        document.querySelector( "#cart_count" ).style.visibility = "hidden";
    }

// =======
//     let cart_count = JSON.parse( localStorage.getItem( 'cart-items' ) );
//     if ( cart_count.length > 0 ) {
//         document.querySelector( "#cart_count" ).style.visibility = 'visible';
//         document.querySelector( "#cart_count" ).innerText = cart_count.length;
//     } else {
//         document.querySelector( "#cart_count" ).style.visibility = "hidden";
//     }
// >>>>>>> 31eaddb4129defa6f5ca59dc29d87cd9960251b8
}

// console.log( count_cart());

// document.querySelector("#logINN").addEventListener("click",myLOG);

// function myLOG()
// {
//     window.location.href="../SIGNUP login/login.html"
// }
// var data = JSON.parse(localStorage.getItem("bestbuyuserdata"))

// let naME=document.getElementById("NaMe")
// naME.innerText=" Welcome "+data[0].name

function showing(){
    let query = document.querySelector( "#search" ).value;
    if(query=="laptops")
    {
         window.location.href="../itemsPages/itemsPage-laptop.html"
    }
    if(query=="kitchen")
    {
        window.location.href="../itemsPages/itemsPage-kitchen.html"
    }
    if(query=="headphones")
    {
        window.location.href="../itemsPages/itemsPage-headPhones.html"
    }

    
}

export { navbar, count_cart, takequery, show_log_menu,showmenu,mainpage}