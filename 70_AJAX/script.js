

function loadDoc() {
    const xhttp = new XMLHttpRequest(); // called with new keyword and give object 
    xhttp.onload = function() {
      document.getElementById("demo").innerHTML = this.responseText;
      }
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
  }