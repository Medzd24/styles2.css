function getValue(){document.getElementById("headlineatas").style.display = 'none';}
function update() {
if ($(window).scrollTop() > 250) {
$('.Ads_Static').animate({
"right": '10px'
}, 90);
} else {
$('.Ads_Static').animate({
"right": '-700px'
}, 90);
}
}
setInterval(update, 800);
