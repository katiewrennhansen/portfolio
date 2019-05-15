var button = document.querySelector('button');

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
button.addEventListener('click', function(){
  document.getElementById("navbar").classList.toggle("show");
});


button.addEventListener('click', function(){
  document.getElementById('abt').classList.toggle("fade");
});

button.addEventListener('click', function(){
  document.getElementById('work').classList.toggle("fade");
});

button.addEventListener('click', function(){
  document.getElementById('contact').classList.toggle("fade");
});
