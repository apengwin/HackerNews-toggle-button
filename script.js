$(document).ready(function(){
  $(".comhead").each(function(i) {
     $(this).children(".togg").detach().insertBefore($(this).children(".hnuser"));
     $(this).children(".togg").after(" ");
  });
});
