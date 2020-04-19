createGrid();
addEventListeners();

function createGrid() {
  const container = document.getElementById("container");
  for (let i = 1; i <= 16; i++) {
    for (let j = 1; j <= 16; j++) {
      let div = document.createElement("div");
      div.setAttribute("id", `r${i}c${j}`);
      div.classList.add("grid-block");
      container.appendChild(div);
    }
  }
}

function addEventListeners() {
  let clearGridButton = document.getElementById("clearButton");
  clearGridButton.addEventListener("click", clearGrid);
  const blocks = document.querySelectorAll(".grid-block");
  blocks.forEach((block) => {
    block.addEventListener("mouseover", changeBlockColor);
  });
}

function changeBlockColor(evt) {
  evt.target.classList.add("colored-block");
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
