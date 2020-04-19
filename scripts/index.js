createGrid();

function createGrid() {
  const container = document.getElementById("container");
  for (let i = 1; i <= 16; i++) {
    for (let j = 1; j <= 16; j++) {
      let div = document.createElement("div");
      div.setAttribute("id", `r${i}c${j}`);
      div.classList.add("grid-block");
      div.textContent = `r${i}c${j}`;
      container.appendChild(div);
    }
  }
}
