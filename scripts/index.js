let currentColor = "black";

createGrid();
addEventListeners();

function createGrid() {
  const container = document.getElementById("container");
  for (let i = 1; i <= 16; i++) {
    for (let j = 1; j <= 16; j++) {
      let div = document.createElement("div");
      div.setAttribute("id", `r${i}c${j}`);
      div.classList.add("grid-block");
      div.addEventListener("mouseover", changeBlockColor);
      div.addEventListener("mousedown", changeBlockColor);

      container.appendChild(div);
    }
  }
}

function addEventListeners() {
  let clearGridButton = document.getElementById("clearButton");
  clearGridButton.addEventListener("click", clearGrid);

  let colorInput = document.getElementById("paintColor");
  colorInput.addEventListener("change", changePaintColor);
}

function changeBlockColor(evt) {
  if (evt.buttons == 1) {
    evt.target.style.backgroundColor = currentColor;
  }
}

function changePaintColor(evt) {
  currentColor = evt.target.value;
}

function clearGrid() {
  let divs = document.querySelectorAll(".grid-block");
  divs.forEach((div) => (div.style.backgroundColor = ""));
}

function removeClassFromAllElements(className) {
  let elements = document.getElementsByClassName(className);
  while (elements.length) {
    elements[0].classList.remove(className);
  }
}
