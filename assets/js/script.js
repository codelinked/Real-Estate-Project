$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() > 0) {
      $('#modal-sign').modal('show');
    }
  });
    
    
$('#single-image-upload-1').change(function(e){
var fileName = e.target.files[0].name;
$("#single-name-display-1").html(fileName); 
        }); 
$('#single-image-upload-2').change(function(e){
var fileName = e.target.files[0].name;
$("#single-name-display-2").html(fileName); 
        });     
    
$('#multiple-image-upload-1').change(function(){
    for(var i = 0 ; i < this.files.length ; i++){
      var fileName = this.files[i].name;
      $('#multiple-name-display-1').append('<div>' + fileName + '</div>');
    }
 });    
$('#multiple-image-upload-2').change(function(){
    for(var i = 0 ; i < this.files.length ; i++){
      var fileName = this.files[i].name;
      $('#multiple-name-display-2').append('<div>' + fileName + '</div>');
    }
 });     
    
    
});
