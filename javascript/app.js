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
const HIGHEST_LEVEL = 99

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

    function canEvolve() {
        var evolutions = DIGIMON_DATABASE[id].evolutions

        for (var i = 0; i < evolutions.length; i++) {
            if (evolutionRequirementsFulfilled(evolutions[i]))
                return true;
        }

        return false;
    }

    function evolutionRequirementsFulfilled(evolution) {
        if (evolution.level > level)
            return false;

        // Add new evolution conditions here

        return true;
    }

    const digimon_info = {
        increaseExperience: (_amount) => {
            if (expNextLevel > 0) {
                expNextLevel -= _amount;
                while (expNextLevel <= 0) {
                    level++
                    if (level == maxLevel) {
                        expNextLevel = -1;
                        break;
                    } else {
                        expNextLevel += EXP_TABLE[_digimon.exp_growth][level - 1];
                    }

                    if (canEvolve()) {
                        document.getElementById('evolve-button').hidden = false;
                    }
                }
            }
        }
        , getDisplayInfo: () => {
            return name + "<br>Level " + level + "<br>Next Level: " + (expNextLevel == -1 ? "---" : expNextLevel);
        }
        , evolve: (evolutionSelected) => {
            id = DIGIMON_DATABASE.findIndex(v => v.dataname == DIGIMON_DATABASE[id].evolutions[evolutionSelected].evolvesTo)
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

///////////////////////////////////////////////////
// Main Code

const player = createPlayer()

function StarterChosen(starter) {
    document.getElementById('starter-selection').innerHTML = starter.innerHTML + " chosen!";
    var digimonId = DIGIMON_DATABASE.findIndex(v => v.dataname == starter.innerHTML);
    player.setStarter(digimon(DIGIMON_DATABASE[digimonId], digimonId));

    // TODO: Change the code here to not use setInterval (Less control as to how often it should happen)
    setInterval(() => {
        player.getMainDigimon().increaseExperience(100);
        // player.gainMoney(100);
        document.getElementById('starter-selection').innerHTML = `${player.getMainDigimon().getDisplayInfo()}`;
        // document.getElementById('starter-selection').innerHTML = `${player.getMainDigimon().getDisplayInfo()}<br>Bits: ${player.getMoney()}`;
    }, 1000);
}

function EvolveDigimon() {
    // TODO: Change this to account for multiple evolutions
    player.getMainDigimon().evolve(0)
    document.getElementById('starter-selection').innerHTML = `${player.getMainDigimon().getDisplayInfo()}`;
}
