const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-slide");
const nextBtn = document.querySelector(".next-slide");
let slideIndex = 0;
// slides[slideIndex].classList.add('active');
const prevSlide = () => {
            // slides[slideIndex].classList.remove('active');
            slideIndex=(slideIndex===0) ? slides.length -1 : slideIndex -1;
            // slides[slideIndex].classList.add('active');
            slider.style.transform =`translateX(-${slideIndex*100}%)`; 
};
const nextSlide = () => {
            // slides[slideIndex].classList.remove('active');
            slideIndex = (slideIndex === slides.length-1)? 0 : slideIndex + 1;
            // slides[slideIndex].classList.add('active');
            slider.style.transform =`translateX(${slideIndex*100}%)`;
};

prevBtn.addEventListener('click',prevSlide);
nextBtn.addEventListener('click',nextSlide);




























// -------------------------------------------------
// const slider = document.querySelector(".slider");
// const slides = document.querySelectorAll(".slide");
// const prevBtn = document.querySelector(".prev-slide");
// const nextBtn = document.querySelector(".next-slide");

// let slideIndex = 0;
// slides[slideIndex].classList.add('active');



// // Arrow function for previous slide
// const prevSlide = () => {
//   slides[slideIndex].classList.remove('active');
//   slideIndex = (slideIndex === 0) ? slides.length - 1 : slideIndex - 1;
//   slides[slideIndex].classList.add('active');
//   slider.style.transform = `translateX(-${slideIndex * 100}%)`;
// };

// // 

// // Arrow function for next slide
// const nextSlide = () => {
//   slides[slideIndex].classList.remove('active');
//   slideIndex = (slideIndex === slides.length - 1) ? 0 : slideIndex + 1;
//   slides[slideIndex].classList.add('active');
//   slider.style.transform = `translateX(${slideIndex * 100}%)`;
// };
// // 
// // Event Listeners
// prevBtn.addEventListener('click', prevSlide);
// nextBtn.addEventListener('click', nextSlide);
