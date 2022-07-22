function showmenu() {
    document.querySelector( "#options" ).style.visibility = "visible";
    console.log( '123' )
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
document.querySelector( "#search" ).addEventListener( "keypress", (ele) => {
    takequery(ele)
} );

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
        
        div.append( image, h3, save );
        container.append( div );
    } );
    
    console.log(data)
}



let count_cart = () => {
    let cart_count = JSON.parse( localStorage.getItem( 'cartdata' ) );
    if ( cart_count.length > 0 ) {
        document.querySelector( "#cart_count" ).innerText = cart_count.length;
    } else {
        document.querySelector( "#cart_count" ).style.visibility = "hidden";
    }
}

console.log( count_cart());