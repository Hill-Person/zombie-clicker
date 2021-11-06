let zombieKillsDisplayElem = document.querySelector('.zombie-kill-counter');
let killZombie = document.querySelector('.kill-zombie');
let zombieDefenseSystemCountElem = document.querySelector('.zombie-defense-system-count');
let addZombieDefenseSystem = document.querySelector('.add-defense-system');
let weaponsMultiplierCountElem = document.querySelector('.weapon-multiplier-count');
let addWeaponsMultiplier = document.querySelector('.add-weapon');
const weaponsMultiplerCostElem = document.getElementById('weapons-cost')
const zombieDefenseSystemCostElem = document.getElementById('defense-system-cost');
const weaponsMultiplierDisplayElem = document.getElementById('weapons-multiplier');
const defenseMultiplierDisplayElem = document.getElementById('defenses-multiplier');
let resetButtonElem = document.querySelector(".reset-button");
let modal = document.getElementById("myModal");
let btn = document.getElementById("modal-button");
let span = document.getElementsByClassName("close")[0];


var zombieKiller = new ZombieKiller();
var clickInterval = null;


defenseUIupdate();
weaponUIupdate();
getDefenseSystemCost();
getWeaponCost();

killZombie.addEventListener("click", () => {
     zombieKiller.killCount += zombieKiller.zombieKillWeaponMultiplier;
    updateKillCount();
});

// resetButtonElem.addEventListener("click", () => {
//     new ZombieKiller();
// });


function updateKillCount() {
    zombieKillsDisplayElem.innerHTML = "Zombies Killed: " + zombieKiller.killCount.toFixed(0);
    defenseUIupdate();
    weaponUIupdate();
}

function updateDefenseSystemCount() {
    zombieDefenseSystemCountElem.innerHTML = "Defenses Deployed: " + zombieKiller.zombieDefenseSystemCount;
}

function defenseSystem() {
    if(zombieKiller.zombieDefenseSystemCount >= 1) killZombie.click(".kill-zombie") }

function getWeaponsMultiplierCount() {
    weaponsMultiplierCountElem.innerHTML = "Weapons owned: " + zombieKiller.weaponsMultiplierCount;
}

function useWeapons()  {
if(zombieKiller.weaponsMultiplierCount >= 1) { killZombie.click(".kill-zombie") }
}

function getWeaponCost() {
    weaponsMultiplerCostElem.innerText = "Weapon Cost: " + zombieKiller.weaponCost.toFixed(2) + " Kills";
}

function getDefenseSystemCost() {
    zombieDefenseSystemCostElem.innerText = "Defense System Cost: " + zombieKiller.defenseSystemCost.toFixed(2) + " Kills";
}

function getWeaponMultiplier() {
    weaponsMultiplierDisplayElem.innerText = "Current Weapons Kill Multiplier: " + zombieKiller.zombieKillWeaponMultiplier.toFixed(2)
}

function getDefenseMultiplier() {
    defenseMultiplierDisplayElem.innerText = "Current Defenses Kill Multiplier: " + zombieKiller.zombieKillDefenseMultiplier.toFixed(2);
}

addWeaponsMultiplier.addEventListener("click", ()=> {
    if (zombieKiller.killCount >= zombieKiller.weaponCost) {
        zombieKiller.killCount = zombieKiller.killCount-zombieKiller.weaponCost;
        zombieKiller.weaponsMultiplierCount++;
        zombieKiller.zombieKillWeaponMultiplier =  (Math.pow(1.2, zombieKiller.weaponsMultiplierCount));
        zombieKiller.weaponCost = ((10 / 100) * zombieKiller.weaponsMultiplierCount) + zombieKiller.weaponCost;
        getWeaponsMultiplierCount();
        updateKillCount();
        useWeapons();
        getWeaponCost();
        getWeaponMultiplier()
    }
});

addZombieDefenseSystem.addEventListener("click", () => {
    if(zombieKiller.killCount >= zombieKiller.defenseSystemCost) {
    zombieKiller.killCount = zombieKiller.killCount-zombieKiller.defenseSystemCost;
    zombieKiller.zombieDefenseSystemCount++;
    zombieKiller.zombieKillDefenseMultiplier = Math.pow(1.2, zombieKiller.zombieDefenseSystemCount);
    zombieKiller.defenseSystemCost = ((10 / 100) * zombieKiller.zombieDefenseSystemCount) + zombieKiller.defenseSystemCost;
    updateDefenseSystemCount();
    updateKillCount();
    defenseSystem();
    getDefenseSystemCost();
    getDefenseMultiplier();
    }
    
});

function defenseUIupdate() {
    if (zombieKiller.killCount < zombieKiller.defenseSystemCost){
        document.querySelector(".add-defense-system").disabled = true;
    }

    else {
        document.querySelector(".add-defense-system").disabled = false;
    }
}

function weaponUIupdate() {
    if (zombieKiller.killCount < zombieKiller.weaponCost){
        document.querySelector(".add-weapon").disabled = true;
    }

    else {
        document.querySelector(".add-weapon").disabled = false;
    }
}

function clearFields() {
    zombieKiller.killCount = 0;
    zombieKiller.zombieDefenseSystemCount = 0;
    zombieKiller.defenseSystemCost = 100;
    zombieKiller.weaponsMultiplierCount = 0;
    zombieKiller.weaponCost = 10;
    zombieKiller.zombieKillWeaponMultiplier = 1;
    zombieKiller.zombieKillDefenseMultiplier = 1;
    {
    updateDefenseSystemCount();
    updateKillCount();
    defenseSystem();
    getDefenseSystemCost();
    getDefenseMultiplier();
    getWeaponCost();
    getWeaponMultiplier();
    getWeaponsMultiplierCount()
    }
}


setInterval("defenseSystem()", 1000);

resetButtonElem.addEventListener("click", () => {
    clearFields();
 });



// btn.onclick = function() {
//   modal.style.display = "block";
// }

// span.onclick = function() {
//   modal.style.display = "none";
// }

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }