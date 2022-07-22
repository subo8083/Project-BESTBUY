import { navbar, count_cart,takequery,show_log_menu,showmenu } from '../navbar.js';
document.querySelector( "#navbar" ).innerHTML = navbar();
 document.querySelector( "#search" ).addEventListener( "keypress", (ele) => {
     takequery(ele)
 } );
count_cart()
document.querySelector( "#menu" ).addEventListener( "click", showmenu );
document.querySelector( "#ac_menu" ).addEventListener( "click", show_log_menu );

// -temparory........................
let temp = [ {
    "logo": "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/Beats_vt_2021_K_ai_renditionpicker_319x319-214271.png;maxHeight=70;maxWidth=120",
    "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6397/6397391cv11d.jpg;maxHeight=640;maxWidth=550",
    "desc1": "Beats Fit Pro.",
    "desc2": "Beats by Dr. Dre - Beats Fit Pro True Wireless Noise Cancelling In-Ear Earbuds - Black",
    "Model": "MK2F3LL/A",
    "SKU": "6397391",
    "rating": "4.5",
    "price": "$199.99",
    "addon": "6 free months of Apple Music & 2 more"
},
    {
        "logo": "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/Sony_NoR_K_4C_ai_renditionpicker_319x319-91923.png;maxHeight=70;maxWidth=120",
        "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6479/6479557_sd.jpg;maxHeight=640;maxWidth=550",
        "desc1": "Sony Wireless Noise Cancelling Over-The-Ear Headphones",
        "desc2": "Sony - WH-XB910N Wireless Noise Cancelling Over-The-Ear Headphones - Gray",
        "Model": "WHXB910N/H",
        "SKU": "6479557",
        "rating": "4.6",
        "price": "$249.99",
        "addon": "6 free months of Apple Music"
    },
    {
        "logo": "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/JBL_4c_eps_renditionpicker_319x319-92000.png;maxHeight=70;maxWidth=120",
        "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6463/6463747_rd.jpg;maxHeight=640;maxWidth=550",
        "desc1": "JBL - Tour One Wireless Over-Ear Noise Cancelling Headphone",
        "desc2": "JBL - Tour One Wireless Over-Ear Noise Cancelling Headphones - Black",
        "Model": "JBLTOURONEBLKAM",
        "SKU": "6463747",
        "rating": "4.1",
        "price": "$299.99",
        "save": "$150",
        "newPrice": "$149.99",
        "addon": "15-DAY FREE & EASY RETURNS"
    },
    {
        "logo": "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/Sennheiser_hz_K_RGB_ai_renditionpicker_319x319-95170.png;maxHeight=70;maxWidth=120",
        "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6460/6460170_sd.jpg;maxHeight=640;maxWidth=550",
        "desc1": "CX True Wireless Black",
        "desc2": "Sennheiser - CX True Wireless Earbud Headphones - Black",
        "Model": "CX True Wireless Black",
        "SKU": "6460170",
        "rating": "4.2",
        "price": "$129.99",
        "save": "$50",
        "newPrice": "$79.99",
        "addon": "Free 6-month security software"
    },
    {
        "logo": "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/SkullCandy_K_ai_renditionpicker_319x319-92012.png;maxHeight=70;maxWidth=120",
        "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6427/6427089_sd.jpg;maxHeight=640;maxWidth=550",
        "desc1": "Skullcandy - Hesh Evo Over-the-Ear Wireless",
        "desc2": "Skullcandy - Hesh Evo Over-the-Ear Wireless - True Black",
        "Model": "S6HVW-N740",
        "SKU": "6427089",
        "rating": "4.5",
        "price": "$104.99",
        "save": "$25",
        "newPrice": "$79.99",
        "addon": "6 free months of Apple Music & 1 more"
    },
    {
        "logo": "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/Beats_vt_2021_K_ai_renditionpicker_319x319-214271.png;maxHeight=70;maxWidth=120",
        "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5920/5920901_rd.jpg;maxHeight=200;maxWidth=300",
        "desc1": "Save $100 on select Beats Studio3 Wireless headphones.",
        "desc2": "Beats by Dr. Dre - Beats Studio³ Wireless Noise Cancelling Headphones - Matte Black",
        "Model": "MX3X2LL/A",
        "SKU": " 5920901",
        "rating": "4.9",
        "price": "$349.99",
        "save": "$100",
        "newPrice": "$249.99",
        "addon": "6 free months of Apple Music & 1 more"
    }
        ];
localStorage.setItem( "savedItems", JSON.stringify( temp ) );
localStorage.setItem( "cartdata", JSON.stringify( temp ) );
// temp close -- - - - - - - -- - - ->
// take item from localStorage....

let arr = JSON.parse( localStorage.getItem( "cartdata" ) );

let split = ( ele ) => {
    ele = ele.replace( ',', '' );
    let p = ele.split( '$' ).map( Number );
    return ( p[ 1 ] );
};




// saved items in local storage


let cart_container = document.querySelector( "#cart_container" );
let append = ( data, container ) => {
    container.innerHTML = null;
    data.forEach( ( ele, index ) => {
        let div = document.createElement( 'div' );
        let image = document.createElement( 'img' );
        image.src = ele.image;
        let title = document.createElement( 'h2' );
        title.innerText = ele.desc2;
        let div2 = document.createElement( 'div' );
        let div3 = document.createElement( 'div' );
        let select = document.createElement( 'select' );
        select.setAttribute( 'id', 'count' );
        select.addEventListener( 'change', function () {
            changevalue( data, ele, index );
        } );
        let op1 = document.createElement( 'option' );
        let op2 = document.createElement( 'option' );
        let op3 = document.createElement( 'option' );
        let op4 = document.createElement( 'option' );
        op1.value = ( ele.quantity );
        op4.value = 1;
        op2.value = 2;
        op3.value = 3;
        op1.innerText = `${ ( ele.quantity ) }`;
        op2.innerText = 2;
        op3.innerText = 3;
        op4.innerText = 1;
        select.append( op1, op4, op2, op3 )
        let p = document.createElement( 'p' );
        p.innerText = 'Remove';
        p.setAttribute( 'class', "remove" );
        p.addEventListener( 'click', () => {
            remove_items( data, index, container );
        } );
        let p2 = document.createElement( 'p' );
        p2.innerText = 'Save';
        p2.setAttribute( "class", "save" )
        p2.addEventListener( 'click', function () {
            add_to_save( data, index, container, ele );
        } );
        let price = document.createElement( 'p' );
        let disc = document.createElement( 'p' );
        let pri = document.createElement( 'p' );
        price.setAttribute( "class", "price" );
        price.innerText = `$${ ( split( ele.price ) * ( ele.quantity ) ).toFixed( 2 ) }`;

        disc.setAttribute( "class", "disc" );
        pri.innerText = `Was $${ ( split( ele.newprice ) * ele.quantity ).toFixed( 2 ) }`;
        pri.setAttribute( "class", "pri" );
        disc.innerText = `Save $${ ( split( ele.save ) * ele.quantity ).toFixed( 2 )} `
        div3.append( price, disc, pri );
        div2.append( select, p, p2 );

        div.append( image, title, div2, div3 );
        container.append( div );
    } );

}
// onchange quantity change price of product

let total = ( data ) => {
    let price = document.querySelector( '#original_price' );
    let saving = document.querySelector( "#savings" );
    let tax = document.querySelector( "#tax_amt" );
    let total = document.querySelector( "#total_amt" );
    let t_price = 0;

    let t_savings = 0;

    data.forEach( ( ele ) => {
     
        t_price += ( split( ele.newprice ) * ele.quantity );
        t_savings += ( split( ele.save ) * ele.quantity );
    } );

    price.innerText = `$${ ( t_price ).toFixed( 2 ) }`;

    saving.innerText = `- $${ ( t_savings ).toFixed( 2 ) }`;
    let t_tax = ( ( t_price - t_savings ) * 4.71 / 100 ).toFixed( 2 );
    tax.innerText = `$${ t_tax }`;
    total.innerText = `$${ ( t_price - t_savings + ( +t_tax ) ).toFixed( 2 ) }`


}

//--first append by clicking cart on navbar;
let total_amt = document.querySelector( "#total_amt" ).innerText;
if ( arr !== null && arr.length > 0 ) {
    arr.forEach( ( ele ) => {
        ele.quantity = 1;
        if ( ele.save == undefined ) {
            ele.save = "$0";
        }
        if ( ele.newprice == undefined ) {
            ele.newprice = `$${ split( ele.price ) + 50 }`;
         
        }
    } );


    total( arr );
    append( arr, cart_container );

}/// if cart is empty then to continue shopping need to link index page here  at line no 178................
else {
    document.querySelector( "#cart_header" ).innerHTML = '<h1 class="header">Your cart is empty</h1><p style="color:black ; font-weight:normal">Just browsing?You can    <a style = "color:blue">  create an account</a> and start earning reward points whenever you make a purchase.</p>'
    document.querySelector( "#order" ).innerHTML = `<h1 class = "header">Order Summary</h1>
    <div id = "zero_total">
    <div>
    <h1>Total</h1>
    <h1>$0.00<h1>
    </div>
    <button id="emp_button"><a href="#">Continue Shopping</a></button>
    </div>
    <h4>Looking for a lease to own option?</h4>
    <p>Enjoy the tech you want today<a>
    Learn more ></a></p>
    `
        ;
    
    

}


// first append over.......

let changevalue = ( arr, ele, index ) => {
    count_cart()
    let val = document.querySelector( `#cart_container div:nth-child(${ index + 1 }) select` ).value;
    arr[ index ].quantity = val;
    localStorage.setItem( "cartdata", JSON.stringify( arr ) );
    let data = JSON.parse( localStorage.getItem( "cartdata" ) );

    total( data );
    console.log( data )
    append( data, cart_container );



}
let remove_items = ( data, index, container ) => {
    data.splice( index, 1 );
    append( data, container );
    localStorage.setItem( "cartdata", JSON.stringify( data ) );
    let details = JSON.parse( localStorage.getItem( "cartdata" ) );

    total( details );
    count_cart()



}

//.......................saved part .....................//
let savedItems = JSON.parse( localStorage.getItem( "savedItems" ) );
savedItems.forEach( ( ele ) => {
    ele.quantity = 1;
    if ( ele.save == undefined ) {
        ele.save = "$0";
    }
    if ( ele.newprice ==undefined ) {
        ele.newprice = `$${ split( ele.price ) + 50 }`;

    }
} );

let saved_content = document.querySelector( "#saved_items" );


let save_append = ( data, container ) => {
    container.innerHTML = null;
    data.forEach( ( ele, index ) => {
        let div = document.createElement( "div" );
        let close = document.createElement( "p" );
        close.addEventListener( 'click', () => {
            remove_saveditems( data, index, container );
        } );
        close.innerHTML = `<i class="fa fa-close" style="font-size:15px;position:relative;left:90%;color: #0457c8;margin-right:-4px"></i>`
        let image = document.createElement( 'img' );
        image.src = ele.image;
        let title = document.createElement( 'p' );
        title.innerText = ele.desc2;
        let stars = document.createElement( 'div' );
        stars.innerHTML = `<i class="fa fa-star" style="font-size:14px;color:orange;margin-right:-4px"></i>
        <i class="fa fa-star" style="font-size:14px;color:orange;margin-right:-4px"></i>
        <i class="fa fa-star" style="font-size:14px;color:orange;margin-right:-4px"></i>
        <i class="fa fa-star" style="font-size:14px;color:orange;margin-right:-4px"></i>
        <i class="fa fa-star" style="font-size:14px;color:orange"></i>`
        let price = document.createElement( "h3" );
        let amt = document.createElement( "s" );
        amt.innerText = `${ ( split(ele.newprice) ).toFixed( 2 )}`;
        let button = document.createElement( "button" );
        button.innerHTML = `<i class="fa fa-shopping-cart" style="font-size:14px"></i>  Add to Cart`;
        button.addEventListener( 'click', () => {
            add_to_container( data, index, container, ele );
        } );
        price.innerText = `${ ele.price }`;
        div.append( close, image, title, stars, price, amt, button );
        saved_content.append( div );
    } );

}
save_append( savedItems, saved_content );

let remove_saveditems = ( data, index, container ) => {
   
    data.splice( index, 1 );
    save_append( data, container );
    localStorage.setItem( "savedItems", JSON.stringify( data ) )
    count_cart()
}
let add_to_save = ( data, index, container, ele ) => {
    
    savedItems.push( ele );
    save_append( savedItems, saved_content );
    localStorage.setItem( "savedItems", JSON.stringify( savedItems ) )
    remove_items( data, index, container );
    let details = JSON.parse( localStorage.getItem( "cartdata" ) );

    total( details );
    count_cart()

}
let add_to_container = ( data, index, container, ele ) => {
    arr.push( ele );
    append( arr, cart_container );
    localStorage.setItem( "cartdata", JSON.stringify( arr ) );
    remove_saveditems( data, index, container );
    let details = JSON.parse( localStorage.getItem( "cartdata" ) );

    total( details );
    count_cart()

}

//*********************** */
let checkout = () => {
    // let data = JSON.parse( localStorage.getItem( "cartdata" ) );
    //let total = document.querySelector( "#total_amt" );
    //localStorage.setItem( "####", JSON.stringify(total) );
    // //window.location.href = '';

}

