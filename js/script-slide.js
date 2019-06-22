var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider");
  var dots = document.getElementsByClassName("dot");
  //var td = document.getElementsByClassName("pro");
  

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("slider-show");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activo", "");
  }


  slides[slideIndex-1].classList.add("slider-show");
  //td[slideIndex-1].classList.add('avance');
  dots[slideIndex-1].className += " activo";
  $("#actual").html(""+slideIndex);

  
}

