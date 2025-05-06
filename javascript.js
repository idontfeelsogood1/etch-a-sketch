function createGrid(width, height) {
    container = document.querySelector(".container");

    for (let i = 0; i <= height; i++) {
        let column = document.createElement("div");
        column.setAttribute("class", "squares-column");
        for (let j = 0; j <= width; j++) {
            let div = document.createElement("div");
            div.setAttribute("class", "squares");
            column.appendChild(div);
        } 
        container.appendChild(column);
    }
}

createGrid(16, 16);