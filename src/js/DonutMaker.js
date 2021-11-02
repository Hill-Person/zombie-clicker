let donutCounterDisplayElem = document.querySelector('.donut-counter');
let donutMakerAddDonut = document.querySelector('.donut-make');
let autoDonutsMakerCountElem = document.querySelector('.auto-donuts-maker-count');
let donutMakerAddAutoDonut = document.querySelector('.auto-donut-make');


let donutCount = 0;
updateDonuts();

donutMakerAddDonut.addEventListener("click", () => {
    donutCount++;
    updateDonuts();
});

function updateDonuts() {
    donutCounterDisplayElem.innerHTML = "Donut Count: " + donutCount;
}

let autoDonutsMakerCount = 0

donutMakerAddAutoDonut.addEventListener("click", () => {
    if(donutCount >= 100) {
    donutCount = donutCount-100;
    autoDonutsMakerCount++;
    updateAutoDonuts();
    updateDonuts();
    }
    autoDonut();
});

function updateAutoDonuts() {
    autoDonutsMakerCountElem.innerHTML = "Bakers count: " + autoDonutsMakerCount;
}

function autoDonut() { donutMakerAddDonut.click(".donut-make")
    setInterval("autoDonut()", 1000);
}


