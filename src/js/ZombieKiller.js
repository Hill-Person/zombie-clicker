let zombieKillsDisplayElem = document.querySelector('.zombie-kill-counter');
let killZombie= document.querySelector('.kill-zombie');
let zomebieDefenseSystemCountElem = document.querySelector('.zombie-defense-system-count');
let addZombieDefenseSystem = document.querySelector('.add-defense-system');


let killCount = 0;
updateKillCount();

killZombie.addEventListener("click", () => {
    killCount++;
    updateKillCount();
});

function updateKillCount() {
    zombieKillsDisplayElem.innerHTML = "Zombies Killed: " + killCount;
}

let zombieDefenseSystemCount = 0

addZombieDefenseSystem.addEventListener("click", () => {
    if(killCount >= 100) {
    killCount = killCount-100;
    zombieDefenseSystemCount++;
    updateDefenseSystemCount();
    updateKillCount();
    }
    defenseSystem();
});

function updateDefenseSystemCount() {
    zomebieDefenseSystemCountElem.innerHTML = "Defenses Deployed: " + zombieDefenseSystemCount;
}

function defenseSystem() { killZombie.click(".kill-zombie")
        setInterval("defenseSystem()", 1000);
}


