motherOfDiv(prompt("Сколько зелёных квадратов?", "Пошёл на хуй!"));

function motherOfDiv(count) {
    for (let i = 0; i < count; i++) {
        let div = document.createElement("div");
        div.style.cssText =
            "background-color: red; width: 10px; height: 10px;position: relative;float:left;";
        let grenDiv = document.body.appendChild(div);
        let divInDiv = document.createElement("div");
        divInDiv.style.cssText =
            "background-color: black; width: 9px; height: 9px; position: absolute; top: 0.5px; botton:0.5; left: 0.5";
        let blackDiv = grenDiv.appendChild(divInDiv);
        let whitekDiv = 0;
        blackDiv.addEventListener("click", (event) => {
            if (!whitekDiv) {
                let divInDivInDiv = document.createElement("div");
                divInDivInDiv.style.cssText =
                    "background-color: white; width: 8px; height: 8px; position: absolute; top: 0.5; botton:0.5; left: 0.5";
                whitekDiv = blackDiv.appendChild(divInDivInDiv);

                let divInDivInDivInDiv = document.createElement("div");
                divInDivInDivInDiv.style.cssText =
                    "background-color: black; width: 7px; height: 7px; position: absolute; top: 0.5; botton:0.5; left: 0.5";
                let randomDiv = whitekDiv.appendChild(divInDivInDivInDiv);

                const setBg = () => {
                    const randomColor = Math.floor(
                        Math.random() * 16777215
                    ).toString(16);
                    divInDivInDivInDiv.style.backgroundColor =
                        "#" + randomColor;
                };
                setInterval(setBg, 10);
            } else {
                blackDiv.removeChild(whitekDiv);
                whitekDiv = 0;
            }
        });
    }
}
