let zombieKillsDisplayElem = document.querySelector('.zombie-kill-counter');
// find or make a pixel zombie png to click, red drop shadow on click
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

// As kills increase better defenses, trip wire, spike pits, burning pits, then to gun turrets, etc.
// better weapons pistol, shotgun, assault rifle, machine gun
// display png pixel weapon when bought?

function defenseSystem() { killZombie.click(".kill-zombie")
        setInterval("defenseSystem()", 1000);
}


