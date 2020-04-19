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
      container.appendChild(div);
    }
  }
}

function addEventListeners() {
  let clearGridButton = document.getElementById("clearButton");
  clearGridButton.addEventListener("click", clearGrid);
}

function changeBlockColor(evt) {
  if (evt.buttons == 1) {
    evt.target.classList.add("colored-block");
  }
  console.log(evt);
}

function clearGrid() {
  removeClassFromAllElements("colored-block");
}

function removeClassFromAllElements(className) {
  let elements = document.getElementsByClassName(className);
  while (elements.length) {
    elements[0].classList.remove(className);
  }
}
