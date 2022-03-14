'use strict'

/*
 Reborns Max Level increase:
 Baby 1: +100
 Baby 2: +90
 Child: +80
 Adult: +60
 Perfect: +40
 Ultimate: +20
 Ultimate 2: +10
*/

const createPlayer = () => {
    var bits = 1000,
        startingDigimon;

    return {
        getMoney: () => bits,
        getMainDigimon: () => startingDigimon,
        gainMoney: (_amount) => {
            bits += _amount
        },
        setStarter(_digimon) {
            startingDigimon = _digimon;
        }
    }
}

const digimon = (_digimon, _id) => {
    var id = _id,
        name = _digimon.names.japanese,
        level = 1,
        expNextLevel = EXP_TABLE[_digimon.exp_growth][level - 1],
        maxLevel = _digimon.max_level;

    const digimon_info = {
        increaseExperience: (_amount) => {
            if (expNextLevel > 0) {
                expNextLevel -= _amount;
                while (expNextLevel <= 0) {
                    level++
                    // TODO: Replace 99 with MAX_LEVEL
                    if (level == maxLevel || level == 99) {
                        expNextLevel = -1
                        break
                    }
                    else {
                        expNextLevel += EXP_TABLE[_digimon.exp_growth][level - 1]

                        // TODO: Change this to account for multiple evolutions and item evolutions (maybe add a checkEvolution() function)
                        if(DIGIMON_DATABASE[id].evolutions && DIGIMON_DATABASE[id].evolutions[0].level <= level){
                            document.getElementById('evolve-button').hidden = false;
                        }
                    }
                }
            }
        }

        , getDisplayInfo: () => {
            return name + "<br>Level " + level + "<br>Next Level: " + expNextLevel
        }

        // TODO: Change this to account for multiple evolutions
        , evolve: () => {
            id = DIGIMON_DATABASE.findIndex(v => v.dataname == DIGIMON_DATABASE[id].evolutions[0].evolvesTo)
            var evolution = DIGIMON_DATABASE[id];
            name = evolution.names.japanese;
            level = 1;
            expNextLevel = EXP_TABLE[evolution.exp_growth][level - 1];
            maxLevel = evolution.max_level
            document.getElementById('evolve-button').hidden = true;
        }
    }

    return digimon_info
}

const player = createPlayer()

const buttons = document.querySelectorAll('.btn')

function StarterChosen(starter) {
    document.getElementById('starter-selection').innerHTML = starter.innerHTML + " chosen!";
    var digimonId = DIGIMON_DATABASE.findIndex(v => v.dataname == starter.innerHTML);
    player.setStarter(digimon(DIGIMON_DATABASE[digimonId], digimonId));

    setInterval(() => {
        player.getMainDigimon().increaseExperience(100);
        // player.gainMoney(100);
        document.getElementById('starter-selection').innerHTML = `${player.getMainDigimon().getDisplayInfo()}`;
        // document.getElementById('starter-selection').innerHTML = `${player.getMainDigimon().getDisplayInfo()}<br>Bits: ${player.getMoney()}`;
    }, 1000);
}

function EvolveDigimon() {
    player.getMainDigimon().evolve()
    document.getElementById('starter-selection').innerHTML = `${player.getMainDigimon().getDisplayInfo()}`;
}
