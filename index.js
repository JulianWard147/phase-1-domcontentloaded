// Your code goes here

document.addEventListener("DOMContentLoaded", function() {
    updateDOM()
  });


function updateDOM(){
    const targetElement = document.getElementById("text")
        targetElement.innerHTML = "This is really cool!"
}