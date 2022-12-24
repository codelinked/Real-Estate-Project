$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() > 0) {
      $('#modal-sign').modal('show');
    }
  });
});