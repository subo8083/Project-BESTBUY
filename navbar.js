function showmenu() {
    document.querySelector( "#options" ).style.visibility = "visible";
    console.log( '123' )
}
// it is closing the menu tab if we click on 1st bar of navbar
document.addEventListener( "click", function ( event ) {
    if ( ( event.target.matches( "#nav1" ) ) && (( !event.target.closest( "#options" ) )||(!event.target.closest( "#login_sign"))) ) {
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
    document.querySelector("#login_sign").style.visibility = "hidden";
}