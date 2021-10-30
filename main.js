
// NAVIGATION MENU

(() => {
  const hamburgerBtn = document.querySelector(".hamburger-btn"),
    navMenu = document.querySelector(".nav-menu"),
    closeNavBtn = navMenu.querySelector(".close-nav-menu");

  hamburgerBtn.addEventListener("click", showNavMenu);
  closeNavBtn.addEventListener("click", hideNavMenu);

  function showNavMenu() {
    navMenu.classList.add("open");
    
  }
  function hideNavMenu() {
    navMenu.classList.remove("open");
    // fadeOutEffect();
    

  }
  // function fadeOutEffect() {
  //   document.querySelector(".fade-out-effect").classList.add("active");
  //   setTimeout(() => {
  //     document.querySelector(".fade-out-effect").classList.remove("active");
  //   }, 300)
  // }
  // // attach an event handler to document
  // document.addEventListener("click", (event) => {
  //   if (event.target.classList.contains('link-item')) {

  //     if (event.target.hash !== "") {
  //       // prevent default anchor click behavior
  //       event.preventDefault();
  //       const hash = event.target.hash;
  //       //  deactivate existing active section
  //       document.querySelector(".section.active").classList.add("hide");
  //       document.querySelector(".section.active").classList.remove("active");
  //       // activate new section
  //       document.querySelector(hash).classList.add("active");
  //       document.querySelector(hash).classList.remove("hide");
  //       // deactivate existing active navigation menu 'link-item'
  //       navMenu.querySelector(".active").classList.add("outer-shadow", "hover-in-shadow");
  //       navMenu.querySelector(".active").classList.remove("active", "inner-shadow");
  //       // activate new navigation menu 'link-item'
  //       event.target.classList.add("active", "inner-shadow");
  //       event.target.classList.remove("outer-shadow", "hover-in-shadow");
  //     // hide navigation menu
  //     hideNavMenu();
  //     }
  //   }

  // })
})();

/*------------------ about section tabs --------------------*/

(() => {
  const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

  tabsContainer.addEventListener("click", (event) => {
    // if event.target contains 'tab-item' class and not contain 'active' class
    if (event.target.classList.contains("tab-item") &&
      !event.target.classList.contains("active")) {
      const target = event.target.getAttribute("data-target");
      // deactivate existing active 'tab-item'
      tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");
      // activate new 'tab-item'
      event.target.classList.add("active", "outer-shadow");
      // deactivate existing active 'tab-content'
      aboutSection.querySelector(".tab-content.active").classList.remove("active");
      // activate new 'tab-content'
      aboutSection.querySelector(target).classList.add("active");
    }
  })
})();


/* ------------------------ testimonial slider---------*/

(() => {

  const sliderContainer = document.querySelector(".testi-slider-container"), slides = sliderContainer.querySelectorAll(".testi-item"), slideWidth = sliderContainer.offsetWidth, prevBtn = document.querySelector(".testi-slider-nav .prev"),
    nextBtn = document.querySelector(".testi-slider-nav .next"),
    activeSlide = sliderContainer.querySelector(".testi-item.active");
  let slideIndex = Array.from(activeSlide.parentElement.children).indexOf(activeSlide);



  //set width of all slides
  slides.forEach((slide) => {
    slide.style.width = slideWidth + "px";
  })
  // set width of slider container
  sliderContainer.style.width = slideWidth * slides.length + "px";

  nextBtn.addEventListener("click", () => {
    if (slideIndex === slides.length - 1) {
      slideIndex = 0;
    }
    else {
      slideIndex++;
    }
    slider();
  })

  prevBtn.addEventListener("click", () => {
    if (slideIndex === 0) {
      slideIndex = slides.length - 1;
    }
    else {
      slideIndex--;
    }
    slider();
  })

  function slider() {
    //deactivate existing active slides
    sliderContainer.querySelector(".testi-item.active").classList.remove("active");
    // activate new slide
    slides[slideIndex].classList.add("active");
    sliderContainer.style.marginLeft = - (slideWidth * slideIndex) + "px";
  }
  slider();


})();

/*-------------hide all sections except active-----------*/

// (() => {
//   const sections = document.querySelectorAll(".section");
//   sections.forEach((section) => {
//     if (!section.classList.contains("active")) {
//       section.classList.add("hide");
//     }
//   })

// })();