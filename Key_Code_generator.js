document.addEventListener('DOMContentLoaded', () =>{
  const input = document.querySelector('#inputDisplay');
  const output = document.querySelector('#outputDisplay');
  
  //getting button inputd
  document.body.addEventListener('keyup', function(event) {
      input.innerHTML = event.key;
      output.innerHTML = "Key code: " + event.code + "\nUnicode: " + event.keyCode ;
  });
  
});