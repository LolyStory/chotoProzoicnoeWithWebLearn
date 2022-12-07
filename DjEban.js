const mapOfCss = {
    lvl1: "background-color: green; width: 100px; height: 100px;position: relative;float:left;",
    lvl2: "background-color: black; width: 90px; height: 90px; position: absolute; top: 5px; botton:5px; left: 5px",
    lvl3: "background-color: white; width: 80px; height: 80px; position: absolute; top: 5px; botton:5px; left: 5px",
    lvl4: "background-color: black; width: 70px; height: 70px; position: absolute; top: 5px; botton:5px; left: 5px",
};

const setBg = (node) => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    node.style.backgroundColor = "#" + randomColor;
};

function motherOfDiv(count) {
    const DIV = document.createElement("div");
    const audioZ = new Audio("eban.mp3");

    const greenDiv = DIV.cloneNode();
    const blackDiv = DIV.cloneNode();
    const whitekDiv = DIV.cloneNode();
    const randomDiv = DIV.cloneNode();

    let zKeyMusic = false;

    greenDiv.style.cssText = mapOfCss.lvl1;
    blackDiv.style.cssText = mapOfCss.lvl2;
    whitekDiv.style.cssText = mapOfCss.lvl3;
    randomDiv.style.cssText = mapOfCss.lvl4;

    for (let i = 0; i < count; i++) {
        const currentGreenDiv = greenDiv.cloneNode();
        const currentBlackDiv = blackDiv.cloneNode();
        const currentWhiteDiv = whitekDiv.cloneNode();
        const currentRandomDiv = randomDiv.cloneNode();

        let hasWhiteDiv = false;
        let randomDivDance = true;
        let intervalId;

        document.body.appendChild(currentGreenDiv);
        currentGreenDiv.appendChild(currentBlackDiv);

        currentBlackDiv.addEventListener("click", (event) => {
            if (!hasWhiteDiv) {
                currentBlackDiv.appendChild(currentWhiteDiv);
                currentWhiteDiv.appendChild(currentRandomDiv);

                intervalId = setInterval(() => setBg(currentRandomDiv), 10);

                hasWhiteDiv = true;
            } else {
                currentBlackDiv.removeChild(currentWhiteDiv);
                hasWhiteDiv = false;
            }
        });

        currentWhiteDiv.addEventListener("contextmenu", (event) => {
            if (randomDivDance) {
                clearInterval(intervalId);

                randomDivDance = false;
            } else {
                intervalId = setInterval(() => setBg(currentRandomDiv), 10);
                randomDivDance = true;
            }
        });
    }

    document.addEventListener(
        "keyup",
        (event) => {
            if (event.key === "я" || event.key === "z") {
                if (zKeyMusic) {
                    audioZ.pause();
                    audioZ.currentTime = 0;

                    zKeyMusic = false;
                } else {
                    audioZ.play();

                    zKeyMusic = true;
                }
            }
        },
        false
    );
}

motherOfDiv(prompt("Сколько зелёных квадратов?", "Пошёл на хуй!"));
