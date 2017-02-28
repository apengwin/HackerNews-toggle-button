$(document).ready(function(){
  $(".comhead").each(function(i) {
    var a = $(this).children(".togg").detach().insertBefore($(this).children(".hnuser"));
  });
});
