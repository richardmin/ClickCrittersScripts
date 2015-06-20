// ==UserScript==
// @name         Pound Adopt Linker
// @version      0.0.1
// @description  When you adopt a adoptable, it links to the adoptable page.
// @author       Richard Min
// @author 		 Seiryuu
// @match        http://*.clickcritters.com/pound.php?act=adopt*
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js
// ==/UserScript==

$("td:contains('from your account and given you the following adoptable:')")
if(document.body.innerHTML.indexOf("given you the following adoptable:") != -1)
{
}