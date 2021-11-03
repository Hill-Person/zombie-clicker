let zombieKillsDisplayElem = document.querySelector('.zombie-kill-counter');
// find or make a pixel zombie png to click, red drop shadow on click, or animations nice
let killZombie= document.querySelector('.kill-zombie');
let zomebieDefenseSystemCountElem = document.querySelector('.zombie-defense-system-count');
let addZombieDefenseSystem = document.querySelector('.add-defense-system');
let weaponsMultiplierCountElem = document.querySelector('.weapon-multiplier');
let addWeaponsMultiplier = document.querySelector('.add-weapon')


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
let defenseSystemCost = 100;

addZombieDefenseSystem.addEventListener("click", () => {
    if(killCount >= defenseSystemCost) {
    killCount = killCount-defenseSystemCost;
    zombieDefenseSystemCount++;
    updateDefenseSystemCount();
    updateKillCount();
    defenseSystem();
    }
    
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

let weaponsMultiplierCount = 0;
let weaponCost = 10;

function getWeaponsMultiplierCount() {
    weaponsMultiplierCountElem.innerHTML = "Weapons owned: " + weaponsMultiplierCount;
}

function useWeapons() { killZombie.click(".kill-zombie")
        setInterval("useWeapons()", 1000);
}

addWeaponsMultiplier.addEventListener("click", ()=> {
    if (killCount >= weaponCost) {
        killCount = killCount-weaponCost;
        weaponsMultiplierCount++;
        getWeaponsMultiplierCount();
        updateKillCount();
    }

});

// probably wrong, need to fix
// let defenseSystemPercentage = 10;
// let defenseSystemPercentageCost = (defenseSystemPercentage / 100) * zombieDefenseSystemCount;
// let defenseSystemCostMultiplier = defenseSystemPercentageCost



