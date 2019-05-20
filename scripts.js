var button = document.querySelector('button');

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
button.addEventListener('click', function(){
  document.getElementById("navbar").classList.toggle("show");
});


button.addEventListener('click', function(){
  document.getElementById('link-abt').classList.toggle("fade");
});

button.addEventListener('click', function(){
  document.getElementById('link-work').classList.toggle("fade");
});

button.addEventListener('click', function(){
  document.getElementById('link-contact').classList.toggle("fade");
});



//NAV SCROLL FADE IN
$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 10) {
    	$('#nav').addClass('fade-in');
    }
    else {
    $('#nav').removeClass('fade-in');
    }
  });
});

