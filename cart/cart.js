import { navbar, count_cart,takequery,show_log_menu,showmenu ,mainpage} from '../nav/navbar.js';
document.querySelector( "#navbar" ).innerHTML = navbar();
 document.querySelector( "#search" ).addEventListener( "keypress", (ele) => {
     takequery(ele)
 } );
import footer from "../footers/footer.js"
document.getElementById( "footer" ).innerHTML = footer()
count_cart()
document.querySelector( "#menu" ).addEventListener( "click", showmenu );
document.querySelector( "#ac_menu" ).addEventListener( "click", show_log_menu );
document.querySelector( "#logo" ).addEventListener( "click", mainpage );

let arr = JSON.parse( localStorage.getItem( "cart-items" ) );

let split = ( ele ) => {
    ele = ele.replace( ',', '' );
    // let p = ele.split( '$' ).map( Number );
    // return ( p[ 1 ] );
    return ele;
};




// saved items in local storage


let cart_container = document.querySelector( "#cart_container" );
let append = ( data, container ) => {
    container.innerHTML = null;
    data.forEach( ( ele, index ) => {
        console.log(ele)
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
        pri.innerText = `Was $${ ( ( ele.newprice ) * ele.quantity ).toFixed( 2 ) }`;
        pri.setAttribute( "class", "pri" );
        disc.innerText = `Save $${ (( ele.save ) * ele.quantity ).toFixed( 2 )} `
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
     
        t_price += ( ( ele.newprice ) * ele.quantity );
        t_savings += ( ( ele.save ) * ele.quantity );
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
let total_amt = document.querySelector( "#total_amt" ).innerText;
if ( arr !== null && arr.length > 0 ) {
    arr.forEach( ( ele ) => {
        ele.quantity = 1;
        if ( ele.save == undefined ) {
            ele.save = "0";
        }
        if ( ele.newprice == undefined ) {
            ele.newprice = `${ split( ele.price ) + 50 }`;
         
        }
        console.log(ele)
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
    localStorage.setItem( "cart-items", JSON.stringify( arr ) );
    let data = JSON.parse( localStorage.getItem( "cart-items" ) );

    total( data );
    console.log( data )
    append( data, cart_container );



}
let remove_items = ( data, index, container ) => {
    data.splice( index, 1 );
    append( data, container );
    localStorage.setItem( "cart-items", JSON.stringify( data ) );
    let details = JSON.parse( localStorage.getItem( "cart-items" ) );

    total( details );
    count_cart()



}

//.......................saved part .....................//
let savedItems = JSON.parse( localStorage.getItem( "saved-items" ) ) || [];
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
        amt.innerText = `$${ ( (ele.newprice) )}`;
        let button = document.createElement( "button" );
        button.innerHTML = `<i class="fa fa-shopping-cart" style="font-size:14px"></i>  Add to Cart`;
        button.addEventListener( 'click', () => {
            add_to_container( data, index, container, ele );
        } );
        price.innerText = `$${ ele.price }`;
        div.append( close, image, title, stars, price, amt, button );
        saved_content.append( div );
    } );

}
save_append( savedItems, saved_content );

let remove_saveditems = ( data, index, container ) => {
   
    data.splice( index, 1 );
    save_append( data, container );
    localStorage.setItem( "saved-items", JSON.stringify( data ) )
    count_cart()
}
let add_to_save = ( data, index, container, ele ) => {
    
    savedItems.push( ele );
    save_append( savedItems, saved_content );
    localStorage.setItem( "saved-items", JSON.stringify( savedItems ) )
    remove_items( data, index, container );
    let details = JSON.parse( localStorage.getItem( "cart-items" ) );

    total( details );
    count_cart()

}
let add_to_container = ( data, index, container, ele ) => {
    arr.push( ele );
    append( arr, cart_container );
    localStorage.setItem( "cart-items", JSON.stringify( arr ) );
    remove_saveditems( data, index, container );
    let details = JSON.parse( localStorage.getItem( "cart-items" ) );

    total( details );
    count_cart()

}

//*********************** */
let checkout = () => {
    // let data = JSON.parse( localStorage.getItem( "cartdata" ) );
    let total = document.querySelector( "#total_amt" );
    //localStorage.setItem( "####", JSON.stringify(total) );
    window.location.href = '../adress+payment/AddressPage.html';

}
document.querySelector( "#checkout" ).addEventListener( "click", checkout );

var data = JSON.parse(localStorage.getItem("bestbuyuserdata"))

let naME=document.getElementById("NaMe")
naME.innerText=" Welcome "+data[0].name

