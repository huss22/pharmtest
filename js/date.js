$(document).ready(function(){
var u = $.now();
var x = new Date($.now());
var minute = 1000 * 60;
var hour = minute * 60;
var day = hour * 24;
var week = day * 7;
var pick = $('#pick').val();
$('#rightnow').empty();
//$('#rightnow').append("<b>Today's date:    " + $.format.date(x, "ddd D of MMMM yyyy") + '</b><br>');
//$('#rightnow').append("<b>Local Time right now:    " + $.format.date(x, "h:MM a") + '</b><br>');
});
