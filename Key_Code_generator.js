document.addEventListener('DOMContentLoaded', () =>{

const inputDisplay = document.querySelector('#inputDisplay');

document.addEventListener('keyCode', function(event) {
  if(event.keyCode == 37){
    inputDisplay.innerHTML = "hello";
  }
  
});
  
});