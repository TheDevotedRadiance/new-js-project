 const slider = document.querySelector(".slider");
 const slides = document.querySelectorAll(".slide");
 const prevBtn = document.querySelector(".prev-slide");
 const nextBtn = document.querySelector(".next-slide");
 

 

 prevBtn.addEventListener('click',prevSlide);
 nextBtn.addEventListener('click',nextSlide);


 let slideIndex = 0;


 function prevSlide(){
if(slideIndex === 0){
  slideIndex = slides.length-1
}
else{
  slideIndex =  slideIndex-1;
}
    
    slider.style.transform =`translateX(-${slideIndex * 100}%)`;

 }

  function nextSlide(){
      if(slideIndex === slides.length-1){
        slideIndex = 0 ;
      }
      else{ slideIndex = slideIndex + 1;
      }

      slider.style.transform =`translateX(-${slideIndex * 100}%)`; 
  }

  
// 
// // // // -----------------------------------------------------------







// const slider = document.querySelector(".slider");
// const slides = document.querySelectorAll(".slide");
// const prevBtn = document.querySelector(".prev-slide");
// const nextBtn = document.querySelector(".next-slide");

// let slideIndex = 0;


// showSlide(slideIndex);

// prevBtn.addEventListener('click', prevSlide);
// nextBtn.addEventListener('click', nextSlide);

// function showSlide(index) {
//     for (let i = 0; i < slides.length; i++) {
//         if (i === index) {
//             slides[i].classList.add('active');
//         } else {
//             slides[i].classList.remove('active');
//         }
//     }
//     slider.style.transform = `translateX(-${index * 100}%)`;
// }

// function prevSlide() {
//     slideIndex = (slideIndex - 1 + slides.length) % slides.length;
//     showSlide(slideIndex);
// }

// function nextSlide() {
//     slideIndex = (slideIndex + 1 + slides.length) % slides.length;
//     showSlide(slideIndex);
// }
// ------------------------------------------------


