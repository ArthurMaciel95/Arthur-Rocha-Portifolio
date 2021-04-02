const closeButton = document.querySelector(".close-button");
const aside = document.querySelector("aside");
const contentArea = document.querySelectorAll(".content-area");

//ASIDE ANIMATE BAR
closeButton.addEventListener("click", () => {
  aside.classList.toggle("active");
  if (aside.classList.contains("active")) {
    closeButton.classList.add("close");
    contentArea.forEach((content) => {
      content.classList.add("active");
    });
  } else {
    closeButton.classList.remove("close");
    contentArea.forEach((content) => {
      content.classList.remove("active");
    });
  }
});

// TRANSITION SCROLL DIV
function animaScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    console.log(sectionTop);
    if (sectionTop <= 200) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", animaScroll);
