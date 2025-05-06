function createGrid(width, height) {
    container = document.querySelector(".container");

    for (let i = 0; i <= height; i++) {
        let column = document.createElement("div");
        column.setAttribute("class", "squares-column");
        for (let j = 0; j <= width; j++) {
            let div = document.createElement("div");
            div.setAttribute("class", "squares");
            div.addEventListener("mouseenter", () => {
                div.style.backgroundColor = "blue";
            })
            column.appendChild(div);
        } 
        container.appendChild(column);
    }
}

function createNewGrid() {
    button = document.querySelector(".btn");
    button.addEventListener("click", () => {
        let width = prompt("Enter new width");
        let height = prompt("Enter new height");
        document.querySelector(".container").innerHTML = "";
        createGrid(width, height);
    })
}

createGrid(16, 16);
createNewGrid();