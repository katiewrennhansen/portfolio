var button = document.querySelector('button');

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
button.addEventListener('click', function(){
  document.getElementById("dropdown").classList.toggle("show");
});
