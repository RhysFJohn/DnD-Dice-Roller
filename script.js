const darkModeToggle = document.querySelector(".toggler");
const D20Dice = document.querySelector(".D20");
const D12Dice = document.querySelector(".D12");
const D10Dice = document.querySelector(".D10");
const D8Dice = document.querySelector(".D8");
const D6Dice = document.querySelector(".D6");
const D4Dice = document.querySelector(".D4");
const Numgen = document.querySelector(".NumGen");
const rollHist = document.querySelector(".grid-container");

D20Dice.addEventListener("click", () => {
  Numgen.innerHTML = Math.floor(Math.random() * 20 + 1);
  Numgen.style.color = "green";
});

D12Dice.addEventListener("click", () => {
  Numgen.innerHTML = Math.floor(Math.random() * 12 + 1);
  Numgen.style.color = "blue";
});

D10Dice.addEventListener("click", () => {
  Numgen.innerHTML = Math.floor(Math.random() * 10 + 1);
  Numgen.style.color = "red";
});

D8Dice.addEventListener("click", () => {
  Numgen.innerHTML = Math.floor(Math.random() * 8 + 1);
  Numgen.style.color = "slategrey";
});

D6Dice.addEventListener("click", () => {
  Numgen.innerHTML = Math.floor(Math.random() * 6 + 1);
  Numgen.style.color = "purple";
});

D4Dice.addEventListener("click", () => {
  Numgen.innerHTML = Math.floor(Math.random() * 4 + 1);
  Numgen.style.color = "orchid";
});
