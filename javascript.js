function createGrid(width, height) {
    container = document.querySelector(".container");

    for (let i = 0; i <= height; i++) {
        let column = document.createElement("div");
        column.setAttribute("class", "squares-column");
        for (let j = 0; j <= width; j++) {
            let div = document.createElement("div");
            div.setAttribute("class", "squares");
            div.addEventListener("mouseenter", () => {
                div.style.backgroundColor = getRandomColor();
            })
            column.appendChild(div);
        } 
        container.appendChild(column);
    }
}

function createNewGrid() {
    button = document.querySelector(".btn");
    button.addEventListener("click", () => {
        do {
            var width = prompt("Enter new width (limit of 100)");
        } while (width <= 0 || width > 100);
        
        do {
            var height = prompt("Enter new height (limit of 100)");
        } while (height <= 0 || height > 100);

        document.querySelector(".container").innerHTML = "";
        createGrid(width, height);
    })
}


function getRandomColor() {
	var x = Math.round(0xffffff * Math.random()).toString(16);
	var y = (6 - x.length);
	var z = '000000';
	var z1 = z.substring(0, y);
	return '#' + z1 + x;
}

createGrid(16, 16);
createNewGrid();