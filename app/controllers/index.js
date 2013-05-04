function doClick(e) {  
    alert("doClick");
}
/*
$.mywidget.on('click', function(e) {
	alert("$.mywidget.on");
});
 above code  has no effect on iOS
 occurs error on Android

*/
/*
$.mywidget.addEventListener('click', function(e) {
	alert("$.mywidget.addEventListener");
});
above code works fine on iOS
 occurs error on Android

*/

$.mywidget.label.on('click', function(e) {
	alert("$.mywidget.label.on");
});
/*
above code works fine both on iOS and Android
*/
/*
$.mywidget.label.addEventListener('click', function(e) {
	alert("$.mywidget.label.addEventListener");
});
above code works fine both on iOS and Android
*/

$.index.open();
