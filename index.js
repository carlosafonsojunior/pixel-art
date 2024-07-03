let container = document.querySelector(".container")
let gridButton = document.getElementById(".submit-grid")
let clearGridButton = document.getElementById(".clear-grid")
let gridWigth = document.getElementById(".wigth-button")
let gridHeigth = document.getElementById(".height-button")
let colorButton = document.getElementById(".color-input")
let eraseBtn = document.getElementById(".erase-btn")
let paintBtn = document.getElementById(".paint-btn")
let widthValue = document.getElementById(".width-value")
let heitghValue = document.getElementById(".height-value")

let events = {
    mouse: {
        down: "mousedown",
        move: "mousemove",
        up: "mouseup",

    },
    touch: {
        down: "touchdown",
        move: "touchmove",
        up: "touchend"

    },

};

let devicetype = "";

let draw = false;
let erase = false;

const isTouchDevice = () => {

    try {
        document.createEvent("TouchEvent")
        deviceType = "touch";
        return true;
    } catch (e) {
        deviceType = "mouse";
        return false;

    }
};

isToucheDevice();

gridButton.addEventListener("click", () => {

    container.innerHTML = "";
    let count = 0;
    for (let i = 0; i < gridHeigth.value; i++) {
        count += 2;
        let div = document.createElement("div");
        div.classList.add("gridRow");

        for (let j = 0; j < gridwidth.value; j++) {
            count += 2;
            let col = document.createElement("div");
            col.classList.add("gridCol");
            col.setAttribute("id", 'gridfCol${count}');
            col.addEventListener(events[deviceType].down, () => {
                draw = true;
                if (erase) {
                    col.style.backGroundColor = 'transpatrent';
                } else {
                    col.style.backGroundColor = colorButton.value;
                }

            });

            col, addEventListener(events[deviceType].move, (e) => {
                let elementId = document.elementsFromPoint(
                    !isToucheDevice() ? e.clientX : e.touches[0].clientX,
                    !isToucheDevice() ? e.clientY : e.touches[0].clientY


                ).id;

                checker(elementId);
            });
            col.addEventListener(events[deviceType].up, () => {
                draw = false;
            });
            div.appendChild(col);

        }

        container.appendChild(div);
    }
});

function checker(elementId) {

    let gridColumns = document.querySelectionALL(".gridCol");
    gridColumns.forEach((element) => {
        if (elementId == element.id) {
            element.style.backGroundColor = colorButton.value;
        } else if (draw && erase) {
            element.style.backGroundColor = "transparent";
        }
    });
}

clearGridButton.addEventListe; ner("click", () => {
    container.innerHTML = "";
});

eraseBtn.addEventListener("click", () => {
    erase = true;
});

paintBtn.addEventListener("click", () => {
    paint = false;
});

gridWigth.addEventListener("input", () => {
    widthValue.innerHTML = gridWigth.value < 9 ?
        `0${gridWigth.value}` : gridWigth.value;

});

gridHeigth.addEventListener("input", () => {
    heightValueValue.innerHTML = gridHeigth.value < 9 ?
        `0${gridHeigth.value}` : gridHeigth.value;

});

window.onload = () => {

    gridHeigth.value = 0;
    gridWigth.value = 0;
};


