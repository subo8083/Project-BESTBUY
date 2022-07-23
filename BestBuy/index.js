
 import { navbar, count_cart, takequery, show_log_menu,showmenu} from "../nav/navbar.js"
 document.querySelector( "#navbar" ).innerHTML = navbar();
 document.querySelector( "#search" ).addEventListener( "keypress", (ele) => {
     takequery(ele)
 } );
count_cart()
document.querySelector( "#menu" ).addEventListener( "click", showmenu );
document.querySelector( "#ac_menu" ).addEventListener( "click", show_log_menu );