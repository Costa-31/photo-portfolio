let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
/*window.onscroll = function () {
  scrollFunction();
};*/

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//for scroll back after refresh

function saveScrollPosition() {
  const scrollY = window.scrollY;
  sessionStorage.setItem("scrollPosition", scrollY);
}

//link handle for new window

function openNewWindow() {
  window.open("https://www.instagram.com/04patrick05/", "_blank");
}

function openNewWindow2() {
  window.open("https://www.facebook.com/patrik.sandor.39", "_blank");
}
function openNewWindow3() {
  window.open(
    "mailto:sandorpatrikphotos@gmail.com?subject=Alap csomag",
    "_blank"
  );
}
function openNewWindow4() {
  window.open(
    "mailto:sandorpatrikphotos@gmail.com?subject=Közepes csomag",
    "_blank"
  );
}
function openNewWindow5() {
  window.open(
    "mailto:sandorpatrikphotos@gmail.com?subject=Nagy csomag",
    "_blank"
  );
}
function openNewWindow6() {
  window.open(
    "mailto:sandorpatrikphotos@gmail.com?subject=Ajánlatkérés",
    "_blank"
  );
}
function openNewWindow7() {
  window.open("./Photosite/street.html", "_self");
}
function openNewWindow8() {
  window.open("./Photosite/portrait.html", "_self");
}
function openNewWindow9() {
  window.open("./Photosite/sport.html", "_self");
}

// card pic sliders

const cardsContainer = document.querySelector(".blur_cards");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1) % 3;
  updateSliderPosition();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % 3;
  updateSliderPosition();
});

function updateSliderPosition() {
  const cardWidth = document.querySelector(".blur_card").offsetWidth;
  const translateXValue = -currentIndex * cardWidth;
  cardsContainer.style.transform = `translateX(${translateXValue}px)`;
}

/* Hamburger menu for navbar*/

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger4");
  const menu = document.querySelector(".menu");

  hamburgerMenu.addEventListener("click", function () {
    menu.classList.toggle("show");
  });
});
