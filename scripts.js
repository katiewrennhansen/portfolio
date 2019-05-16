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

