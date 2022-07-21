// -temparory........................
let temp = [ {
    'image': 'https://pisces.bbystatic.com/image2//BestBuy_US/images/products/4900/4900942_sd.jpg;maxHeight=100;maxWidth=100',
    'desc1': 'Apple - AirPods Pro (with Magsafe Charging Case) - White',
    'desc2': 'Apple - AirPods Pro (with Magsafe Charging Case) - White',
    'model': "hasdakj",
    "SKU": "650032",
    "rating": "0",
    "price": "$100",
    "save": "$70",
    "newprice": "$170",
    "addon": "3 free months of youtube premium",

},
{
    'image': 'https://pisces.bbystatic.com/image2//BestBuy_US/images/products/4900/4900942_sd.jpg;maxHeight=100;maxWidth=100',
    'desc1': 'Apple - AirPods Pro (with Magsafe Charging Case) - White',
    'desc2': 'Apple - AirPods Pro (with Magsafe Charging Case) - White',
    'model': "hasdakj",
    "SKU": "650032",
    "rating": "0",
    "price": "$100",
    "save": "$70",
    "newprice": "$170",
    "addon": "3 free months of youtube premium",

},
{
    'image': 'https://pisces.bbystatic.com/image2//BestBuy_US/images/products/4900/4900942_sd.jpg;maxHeight=100;maxWidth=100',
    'desc1': 'Apple - AirPods Pro (with Magsafe Charging Case) - White',
    'desc2': 'Apple - AirPods Pro (with Magsafe Charging Case) - White',
    'model': "hasdakj",
    "SKU": "650032",
    "rating": "0",
    "price": "$100",
    "save": "$70",
    "newprice": "$170",
    "addon": "3 free months of youtube premium",

},
{
    'image': 'https://pisces.bbystatic.com/image2//BestBuy_US/images/products/4900/4900942_sd.jpg;maxHeight=100;maxWidth=100',
    'desc1': 'Apple - AirPods Pro (with Magsafe Charging Case) - White',
    'desc2': 'Apple - AirPods Pro (with Magsafe Charging Case) - White',
    'model': "hasdakj",
    "SKU": "650032",
    "rating": "0",
    "price": "$100",
    "save": "$70",
    "newprice": "$170",
    "addon": "3 free months of youtube premium",

},


];
localStorage.setItem( "savedItems", JSON.stringify( temp ) );
localStorage.setItem( "cartdata", JSON.stringify( temp ) );
// temp close -- - - - - - - -- - - ->
// take item from localStorage....

let arr = JSON.parse( localStorage.getItem( "cartdata" ) );

let split = ( ele ) => {
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
        pri.innerText = `Was $${ split( ele.newprice ) * ele.quantity }`;
        pri.setAttribute( "class", "pri" );
        disc.innerText = `Save $${ split( ele.save ) * ele.quantity } `
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

    let tot=`$${ ( t_price - t_savings + ( +t_tax ) ).toFixed( 2 ) }`
    localStorage.setItem("cart-amount",tot)

}

//--first append by clicking cart on navbar;
if ( arr !== null ) {
    arr.forEach( ( ele ) => {
        ele.quantity = 1;
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



}

//.......................saved part .....................//
let savedItems = JSON.parse( localStorage.getItem( "savedItems" ) );
savedItems.forEach( ( ele ) => {
    ele.quantity = 1;
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
        amt.innerText = `${ ele.newprice }`;
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
}
let add_to_save = ( data, index, container, ele ) => {
    savedItems.push( ele );
    save_append( savedItems, saved_content );
    localStorage.setItem( "savedItems", JSON.stringify( savedItems ) )
    remove_items( data, index, container );
    let details = JSON.parse( localStorage.getItem( "cartdata" ) );

    total( details );


}
let add_to_container = ( data, index, container, ele ) => {
    arr.push( ele );
    append( arr, cart_container );
    localStorage.setItem( "cartdata", JSON.stringify( arr ) );
    remove_saveditems( data, index, container );
    let details = JSON.parse( localStorage.getItem( "cartdata" ) );

    total( details );

}

//*********************** */
let checkout = () => {
    // let data = JSON.parse( localStorage.getItem( "cartdata" ) );
    //let total = document.querySelector( "#total_amt" );
    //localStorage.setItem( "####", JSON.stringify(total) );
    // //window.location.href = '';

}

