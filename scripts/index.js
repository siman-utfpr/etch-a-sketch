let currentColor = "black";

createGrid(16);
addEventListeners();

function createGrid(n) {
  const container = document.getElementById("container");
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
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

  let numberDivsButton = document.getElementById("updateGridSize");
  numberDivsButton.addEventListener("click", updateGridSize);
}

function changeBlockColor(evt) {
  if (evt.buttons == 1) {
    evt.target.style.backgroundColor = currentColor;
  }
}

function changePaintColor(evt) {
  currentColor = evt.target.value;
}

function updateGridSize() {
  let input = document.getElementById("gridSize");
  let value = input.value;
  let currentGridSize = document.documentElement.style.getPropertyValue(
    "--grid-size"
  );
  if (validateGridSize(value)) {
    clearContainer();
    createGrid(value);
    document.documentElement.style.setProperty("--grid-size", value);
  } else {
    input.value = currentGridSize;
  }
}

function clearGrid() {
  let divs = document.querySelectorAll(".grid-block");
  divs.forEach((div) => (div.style.backgroundColor = ""));
}

function validateGridSize(value) {
  return !isNaN(value) && value > 0 && isFinite(value);
}

function clearContainer() {
  let container = document.getElementById("container");
  container.innerHTML = "";
}
