document.addEventListener("DOMContentLoaded", function () {
    let button = document.createElement("button")
    let btnText = document.createTextNode("ADD SQUARE!!!");
    button.className = "button";
    button.appendChild(btnText);
    document.body.appendChild(button);
    let counter = 0;
    let colorSelection = ["aqua", "red", "blue", "pink", "purple", "green", "brown", "fuchisa", "orange", "yellow", "cyan"]

    let container = document.createElement("div");
    document.body.appendChild(container);

    button.addEventListener("click", buttonClick);

    function buttonClick() {
        let square = document.createElement("div");
        square.id = counter++;
        square.className = "black-square"

        square.addEventListener("dblclick", function () {
           let colorArray = [ "aqua", "red", "blue", "pink", "purple", "green", "brown", "fuchisa", "orange", "yellow", "cyan"]
           let randomNum = Math.floor(Math.random() * colorArray.length)
           square.style.backgroundColor = colorArray[randomNum]
        })

        square.textContent = square.id;
        // textContainer = document.createElement("div")
        // square.appendChild(textContainer);

        square.addEventListener("mouseleave", function () {
            square.textContent = "";
        });

        square.addEventListener("mouseenter", function () {
            square.textContent = square.id
        });
        
        container.append(square);
    }

    




    

    



})