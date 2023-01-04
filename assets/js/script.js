$(document).ready(function(){
    setTimeout(function() { 
        $('#modal-sign').modal('show');
    }, 15000);
    
    $('#modal-sign').on('hidden.bs.modal', function () {
 setTimeout(function() { 
        $('#modal-sign').modal('show');
    }, 15000);
})
    
  
    
$('#single-image-upload-reserve').change(function(e){
var fileName = e.target.files[0].name;
$("#single-name-display-reserve").html(fileName); 
        }); 
$('#single-image-upload-popup').change(function(e){
var fileName = e.target.files[0].name;
$("#single-name-display-popup").html(fileName); 
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

function rentGrid() {
  const element = document.getElementById("rent-grid");
  element.scrollIntoView();
}
