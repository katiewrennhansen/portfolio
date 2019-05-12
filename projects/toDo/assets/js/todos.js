//Check of TODOs with click
$('ul').on('click', 'li', function(){
  $(this).toggleClass('completed');
});

//click on Trash to delete
$('ul').on('click', 'span', function(event){
  $(this).parent().fadeOut(700,function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$('input[type = "text"]').keypress(function(event){
  if(event.which === 13){
    //greab new todoText
    var todoText = $(this).val();
    $(this).val('');
    //create new li and add to ul
    $('ul').append('<li><span class="delete"><i class="fas fa-trash-alt"></i></span>' + todoText + '</li>');
  };
});

$('#plus').click(function(){
  $('input[type = "text"]').fadeToggle();
});
