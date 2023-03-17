function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
   x.className += ' responsive';
 } else {
   x.className = 'navtoggle';
 }
}

$('nav ul li a').on('click', function(){
  $('nav ul li a.active').removeClass('active');
  $(this).addClass('active');
  });