var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function showMore() {
    
  var review = document.getElementsByClassName("more");
  var btnText = document.getElementById("show-more-btn");
    if(review[0].style.display == "none"){
    review[0].style.display = "inline";
    review[1].style.display = "inline";
    review[2].style.display = "inline";
    review[3].style.display = "inline";
    btnText.innerHTML = "Скрии";
    }
    else{
    review[0].style.display = "none";
    review[1].style.display = "none";
    review[2].style.display = "none";
    review[3].style.display = "none";
    btnText.innerHTML = "Покажи още"; 
    }
}