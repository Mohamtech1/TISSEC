//change navbar style on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 10)

})

//show/hide faq answers
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

//change icon
const icon = faq.querySelector('.faq__icon i');
if(icon.className === 'uil uil-plus-circle') {
    icon.className = "uil uil-minus-circle"
} else{
    icon.className ="uil uil-plus-circle";
}
    })
    
})

// sho/hide nave menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");



menuBtn.addEventListener('click', () =>{
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})


// close nav menu

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}
closeBtn.addEventListener('click', closeNav)

 
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(n) {
  slides[currentSlide].style.display = "none";
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = "block";
}

function changeSlide(n) {
  showSlide(currentSlide + n);
}

function autoChangeSlide() {
  changeSlide(1);
  setTimeout(autoChangeSlide, 10000); // Change slide every 8 seconds
}

autoChangeSlide();
