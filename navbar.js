function showmenu() {
    document.querySelector( "#options" ).style.visibility = "visible";
    console.log( '123' )
}
// it is closing the menu tab if we click on 1st bar of navbar
document.addEventListener( "click", function ( event ) {
    if ( ( event.target.matches( "#nav1" ) ) && ( !event.target.closest( "#options" ) ) ) {
        closehelp()
    }
},
    false );


function closehelp() {
    console.log(13)
    document.querySelector( "#options" ).style.visibility = "hidden";
}