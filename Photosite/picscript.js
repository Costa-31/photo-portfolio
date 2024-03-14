// Eredeti kép elem
var originalImage = document.getElementById("originalImage");

// Teljes képernyős modális ablak és kép elemek
var modal = document.getElementById("myModal");
var fullScreenImage = document.getElementById("fullScreenImage");

// Bezárás gomb
var close = document.getElementById("close");

// Eredeti képre kattintva nyissa meg a teljes képernyőn
originalImage.onclick = function () {
  modal.style.display = "block";
  fullScreenImage.src = this.src;
};

// Bezárás gombra kattintva zárja be a modális ablakot
close.onclick = function () {
  modal.style.display = "none";
};
