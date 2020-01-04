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

function showReg(){
    var modal = document.getElementById("id01");
    var reg = document.getElementById("regform");
    modal.style.display = "none";
    reg.style.display = "block";
}

function showRegHide(){
    var reg = document.getElementById("regform");
    reg.style.display = "none";
}

function pswForget(){
    var modal = document.getElementById("id01");
    var reg = document.getElementById("pswforget");
    modal.style.display = "none";
    reg.style.display = "block";
}

function pswForgetHide(){
    var reg = document.getElementById("pswforget");
    reg.style.display = "none";
}

function showAlert(){
    
    var form = document.getElementById("login-form");

function myFunction() {
  if (form.checkValidity()) {
    var modal = document.getElementById("id01");
    $('.alert').show();
    setTimeout(function(){ $(".alert").fadeTo(1000, 0.4).slideUp(800); }, 3000);
    $(modal).fadeTo(1000, 0);
  }
}
    
    
    
}

function showLogin(){
    var modal = document.getElementById('id01');
    modal.style.display='block';
    modal.style.opacity='100';
}

function showLoginHide(){
    var modal = document.getElementById('id01');
    
    var modal = document.getElementById("id01");
    $('.alert').show();
    setTimeout(function(){ $(".alert").fadeTo(1000, 0.4).slideUp(800); }, 3000);
    $(modal).fadeTo(1000, 0);
}
