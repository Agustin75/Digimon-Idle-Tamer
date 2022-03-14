// baby 1: 5
// baby 2: 15
// child: 50
// adult: 100
// perfect: 175
// ultimate: 275
// ultimate 2: 400

const DIGIMON_DATABASE = [
    {
        dataname: "Botamon",
        names: {
            japanese: "Botamon",
            english: "Botamon"
        },
        // hp : 2,
        // attack : 1,
        // defense: 1,
        // speed : 1,
        max_level: 10,
        exp_growth: FASTEST,
        evolutions: [
            {
                level: 5,
                evolvesTo: "Koromon"
            }
        ],
        // rebirthgains : {
        // 	hp_buff : 0.05,
        // 	attack_buff : 0.1,
        // 	defense_buff : 0.05,
        // 	speed_buff : 0.05
        // },
        // bit_amount_buff : 1
    }, {
        dataname: "Koromon",
        names: {
            japanese: "Koromon",
            english: "Koromon"
        },
        // hp : 5,
        // attack : 5,
        // defense : 3,
        // speed : 2,
        max_level: 20,
        exp_growth: FAST,
        evolutions: [
            {
                level: 15,
                evolvesTo: "Agumon"
            }
        ],
        // rebirth_gains : {
        // 	hp_buff : 0.05,
        // 	attack_buff : 0.1,
        // 	defense_buff : 0.05,
        // 	speed_buff : 0.05
        // },
        // bit_amount_buff : 2
    }, {
        dataname: "Agumon",
        names: {
            japanese: "Agumon",
            english: "Agumon"
        },
        // hp : 13,
        // attack : 20,
        // defense : 10,
        // speed : 7,
        max_level: 30,
        exp_growth: AVERAGE_FAST,
        evolutions: [
            {
                level: 28,
                evolvesTo: "Greymon"
            }
        ],
        // rebirth_gains : {
        // 	hp_buff : 0.05,
        // 	attack_buff : 0.1,
        // 	defense_buff : 0.05,
        // 	speed_buff : 0.05
        // },
        // bit_amount_buff : 5,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    }, {
        dataname: "Greymon",
        names: {
            japanese: "Greymon",
            english: "Greymon"
        },
        // hp : 29,
        // attack : 42,
        // defense : 19,
        // speed : 10,
        max_level: 45,
        exp_growth: AVERAGE,
        evolutions: [
            {
                level: 42,
                // item: "Crest of Courage",
                evolvesTo: "MtlGreymon"
            }
        ],
        // rebirth_gains : {
        // 	hp_buff : 0.05,
        // 	attack_buff : 0.1,
        // 	defense_buff : 0.05,
        // 	speed_buff : 0.05
        // },
        // bit_amount_buff : 10,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    }, {
        dataname: "MtlGreymon",
        names: {
            japanese: "MetalGreymon",
            english: "MetalGreymon"
        },
        // hp : 53,
        // attack : 66,
        // defense : 36,
        // speed : 20,
        max_level: 59,
        exp_growth: AVERAGE_SLOW,
        evolutions: [
            {
                level: 60,
                evolvesTo: "WGreymon"
            }
        ],
        // rebirth_gains : {
        // 	hp_buff : 0.05,
        // 	attack_buff : 0.1,
        // 	defense_buff : 0.05,
        // 	speed_buff : 0.05
        // },
        // bit_amount_buff : 20,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    }, {
        dataname: "WGreymon",
        names: {
            japanese: "WarGreymon",
            english: "WarGreymon"
        },
        // hp : 67,
        // attack : 96,
        // defense : 56,
        // speed : 56,
        max_level : 80,
        exp_growth: SLOW,
        // rebirth_gains : {
        // 	hp_buff : 0.05,
        // 	attack_buff : 0.01,
        // 	defense_buff : 0.05,
        // 	speed_buff : 0.05
        // },
        // bit_amount_buff : 40,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    },
    {
        dataname: "Punimon",
        names: {
            japanese: "Punimon",
            english: "Punimon"
        },
        // hp : 2,
        // attack : 1,
        // defense: 1,
        // speed : 1,
        max_level: 10,
        exp_growth: FASTEST,
        evolutions: [
            {
                level: 5,
                evolvesTo: "Tsunomon"
            }
        ],
        // rebirthgains : {
        // 	hp_buff : 0.05,
        // 	attack_buff : 0.1,
        // 	defense_buff : 0.05,
        // 	speed_buff : 0.05
        // },
        // bit_amount_buff : 1
    }, {
        dataname: "Tsunomon",
        names: {
            japanese: "Tsunomon",
            english: "Tsunomon"
        },
        // hp : 5,
        // attack : 5,
        // defense : 3,
        // speed : 2,
        max_level: 20,
        exp_growth: FAST,
        evolutions: [
            {
                level: 15,
                evolvesTo: "Gabumon"
            }
        ],
        // rebirth_gains : {
        // 	hp_buff : 0.05,
        // 	attack_buff : 0.1,
        // 	defense_buff : 0.05,
        // 	speed_buff : 0.05
        // },
        // bit_amount_buff : 2
    }, {
        dataname: "Gabumon",
        names: {
            japanese: "Gabumon",
            english: "Gabumon"
        },
        // hp : 13,
        // attack : 20,
        // defense : 10,
        // speed : 7,
        max_level: 30,
        exp_growth: AVERAGE_FAST,
        evolutions: [
            {
                level: 28,
                evolvesTo: "Garurumon"
            }
        ],
        // rebirth_gains : {
        // 	hp_buff : 0.05,
        // 	attack_buff : 0.1,
        // 	defense_buff : 0.05,
        // 	speed_buff : 0.05
        // },
        // bit_amount_buff : 5,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    }, {
        dataname: "Garurumon",
        names: {
            japanese: "Garurumon",
            english: "Garurumon"
        },
        // hp : 29,
        // attack : 42,
        // defense : 19,
        // speed : 10,
        max_level: 45,
        exp_growth: AVERAGE,
        evolutions: [
            {
                level: 42,
                // item: "Crest of Friendship",
                evolvesTo: "WGarurumon"
            }
        ],
        // rebirth_gains : {
        // 	hp_buff : 0.05,
        // 	attack_buff : 0.1,
        // 	defense_buff : 0.05,
        // 	speed_buff : 0.05
        // },
        // bit_amount_buff : 10,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    }, {
        dataname: "WGarurumon",
        names: {
            japanese: "WereGarurumon",
            english: "WereGarurumon"
        },
        // hp : 53,
        // attack : 66,
        // defense : 36,
        // speed : 20,
        max_level: 59,
        exp_growth: AVERAGE_SLOW,
        evolutions: [
            {
                level: 60,
                evolvesTo: "MtlGarurumon"
            }
        ],
        // rebirth_gains : {
        // 	hp_buff : 0.05,
        // 	attack_buff : 0.1,
        // 	defense_buff : 0.05,
        // 	speed_buff : 0.05
        // },
        // bit_amount_buff : 20,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    }, {
        dataname: "MtlGarurumon",
        names: {
            japanese: "MetalGarurumon",
            english: "MetalGarurumon"
        },
        // hp : 67,
        // attack : 96,
        // defense : 56,
        // speed : 56,
        max_level : 80,
        exp_growth: SLOW,
        // rebirth_gains : {
        // 	hp_buff : 0.05,
        // 	attack_buff : 0.01,
        // 	defense_buff : 0.05,
        // 	speed_buff : 0.05
        // },
        // bit_amount_buff : 40,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    },
    {
        dataname: "Nyokimon",
        names: {
            japanese: "Nyokimon",
            english: "Nyokimon"
        },
        // hp : 2,
        // attack : 1,
        // defense: 1,
        // speed : 1,
        max_level: 10,
        exp_growth: FASTEST,
        evolutions: [
            {
                level: 5,
                evolvesTo: "Pyokomon"
            }
        ],
        // rebirthgains : {
        // 	hp_buff : 0.05,
        // 	attack_buff : 0.1,
        // 	defense_buff : 0.05,
        // 	speed_buff : 0.05
        // },
        // bit_amount_buff : 1
    }, {
        dataname: "Pyokomon",
        names: {
            japanese: "Pyokomon",
            english: "Yokomon"
        },
        // hp : 5,
        // attack : 5,
        // defense : 3,
        // speed : 2,
        max_level: 20,
        exp_growth: FAST,
        evolutions: [
            {
                level: 15,
                evolvesTo: "Piyomon"
            }
        ],
        // rebirth_gains : {
        // 	hp_buff : 0.05,
        // 	attack_buff : 0.1,
        // 	defense_buff : 0.05,
        // 	speed_buff : 0.05
        // },
        // bit_amount_buff : 2
    }, {
        dataname: "Piyomon",
        names: {
            japanese: "Piyomon",
            english: "Biyomon"
        },
        // hp : 13,
        // attack : 20,
        // defense : 10,
        // speed : 7,
        max_level: 30,
        exp_growth: AVERAGE_FAST,
        evolutions: [
            {
                level: 28,
                evolvesTo: "Birdramon"
            }
        ],
        // rebirth_gains : {
        // 	hp_buff : 0.05,
        // 	attack_buff : 0.1,
        // 	defense_buff : 0.05,
        // 	speed_buff : 0.05
        // },
        // bit_amount_buff : 5,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    }, {
        dataname: "Birdramon",
        names: {
            japanese: "Birdramon",
            english: "Birdramon"
        },
        // hp : 29,
        // attack : 42,
        // defense : 19,
        // speed : 10,
        max_level: 45,
        exp_growth: AVERAGE,
        evolutions: [
            {
                level: 42,
                // item: "Crest of Love",
                evolvesTo: "Garudamon"
            }
        ],
        // rebirth_gains : {
        // 	hp_buff : 0.05,
        // 	attack_buff : 0.1,
        // 	defense_buff : 0.05,
        // 	speed_buff : 0.05
        // },
        // bit_amount_buff : 10,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    }, {
        dataname: "Garudamon",
        names: {
            japanese: "Garudamon",
            english: "Garudamon"
        },
        // hp : 53,
        // attack : 66,
        // defense : 36,
        // speed : 20,
        max_level: 59,
        exp_growth: AVERAGE_SLOW,
        evolutions: [
            {
                level: 60,
                evolvesTo: "Hououmon"
            }
        ],
        // rebirth_gains : {
        // 	hp_buff : 0.05,
        // 	attack_buff : 0.1,
        // 	defense_buff : 0.05,
        // 	speed_buff : 0.05
        // },
        // bit_amount_buff : 20,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    }, {
        dataname: "Hououmon",
        names: {
            japanese: "Hououmon",
            english: "Phoenixmon"
        },
        // hp : 67,
        // attack : 96,
        // defense : 56,
        // speed : 56,
        max_level : 80,
        exp_growth: SLOW,
        // rebirth_gains : {
        // 	hp_buff : 0.05,
        // 	attack_buff : 0.01,
        // 	defense_buff : 0.05,
        // 	speed_buff : 0.05
        // },
        // bit_amount_buff : 40,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    },
    {
        dataname: "Yuramon",
        names: {
            japanese: "Yuramon",
            english: "Yuramon"
        },
        // hp : 2,
        // attack : 1,
        // defense: 1,
        // speed : 1,
        max_level: 10,
        exp_growth: FASTEST,
        evolutions: [
            {
                level: 5,
                evolvesTo: "Tanemon"
            }
        ],
        // rebirthgains : {
        // 	hp_buff : 0.05,
        // 	attack_buff : 0.1,
        // 	defense_buff : 0.05,
        // 	speed_buff : 0.05
        // },
        // bit_amount_buff : 1
    }, {
        dataname: "Tanemon",
        names: {
            japanese: "Tanemon",
            english: "Tanemon"
        },
        // hp : 5,
        // attack : 5,
        // defense : 3,
        // speed : 2,
        max_level: 20,
        exp_growth: FAST,
        evolutions: [
            {
                level: 15,
                evolvesTo: "Palmon"
            }
        ],
        // rebirth_gains : {
        // 	hp_buff : 0.05,
        // 	attack_buff : 0.1,
        // 	defense_buff : 0.05,
        // 	speed_buff : 0.05
        // },
        // bit_amount_buff : 2
    }, {
        dataname: "Palmon",
        names: {
            japanese: "Palmon",
            english: "Palmon"
        },
        // hp : 13,
        // attack : 20,
        // defense : 10,
        // speed : 7,
        max_level: 30,
        exp_growth: AVERAGE_FAST,
        evolutions: [
            {
                level: 28,
                evolvesTo: "Togemon"
            }
        ],
        // rebirth_gains : {
        // 	hp_buff : 0.05,
        // 	attack_buff : 0.1,
        // 	defense_buff : 0.05,
        // 	speed_buff : 0.05
        // },
        // bit_amount_buff : 5,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    }, {
        dataname: "Togemon",
        names: {
            japanese: "Togemon",
            english: "Togemon"
        },
        // hp : 29,
        // attack : 42,
        // defense : 19,
        // speed : 10,
        max_level: 45,
        exp_growth: AVERAGE,
        evolutions: [
            {
                level: 42,
                // item: "Crest of Purity",
                evolvesTo: "Lillymon"
            }
        ],
        // rebirth_gains : {
        // 	hp_buff : 0.05,
        // 	attack_buff : 0.1,
        // 	defense_buff : 0.05,
        // 	speed_buff : 0.05
        // },
        // bit_amount_buff : 10,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    }, {
        dataname: "Lillymon",
        names: {
            japanese: "Lillymon",
            english: "Lillymon"
        },
        // hp : 53,
        // attack : 66,
        // defense : 36,
        // speed : 20,
        max_level: 59,
        exp_growth: AVERAGE_SLOW,
        evolutions: [
            {
                level: 60,
                evolvesTo: "Rosemon"
            }
        ],
        // rebirth_gains : {
        // 	hp_buff : 0.05,
        // 	attack_buff : 0.1,
        // 	defense_buff : 0.05,
        // 	speed_buff : 0.05
        // },
        // bit_amount_buff : 20,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    }, {
        dataname: "Rosemon",
        names: {
            japanese: "Rosemon",
            english: "Rosemon"
        },
        // hp : 67,
        // attack : 96,
        // defense : 56,
        // speed : 56,
        max_level : 80,
        exp_growth: SLOW,
        // rebirth_gains : {
        // 	hp_buff : 0.05,
        // 	attack_buff : 0.01,
        // 	defense_buff : 0.05,
        // 	speed_buff : 0.05
        // },
        // bit_amount_buff : 40,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    },
    {
        dataname: "Babumon",
        names: {
            japanese: "Babumon",
            english: "Pabumon"
        },
        // hp : 2,
        // attack : 1,
        // defense: 1,
        // speed : 1,
        max_level: 10,
        exp_growth: FASTEST,
        evolutions: [
            {
                level: 5,
                evolvesTo: "Motimon"
            }
        ],
        // rebirthgains : {
        // 	hp_buff : 0.05,
        // 	attack_buff : 0.1,
        // 	defense_buff : 0.05,
        // 	speed_buff : 0.05
        // },
        // bit_amount_buff : 1
    }, {
        dataname: "Motimon",
        names: {
            japanese: "Motimon",
            english: "Motimon"
        },
        // hp : 5,
        // attack : 5,
        // defense : 3,
        // speed : 2,
        max_level: 20,
        exp_growth: FAST,
        evolutions: [
            {
                level: 15,
                evolvesTo: "Tentomon"
            }
        ],
        // rebirth_gains : {
        // 	hp_buff : 0.05,
        // 	attack_buff : 0.1,
        // 	defense_buff : 0.05,
        // 	speed_buff : 0.05
        // },
        // bit_amount_buff : 2
    }, {
        dataname: "Tentomon",
        names: {
            japanese: "Tentomon",
            english: "Tentomon"
        },
        // hp : 13,
        // attack : 20,
        // defense : 10,
        // speed : 7,
        max_level: 30,
        exp_growth: AVERAGE_FAST,
        evolutions: [
            {
                level: 28,
                evolvesTo: "Kabuterimon"
            }
        ],
        // rebirth_gains : {
        // 	hp_buff : 0.05,
        // 	attack_buff : 0.1,
        // 	defense_buff : 0.05,
        // 	speed_buff : 0.05
        // },
        // bit_amount_buff : 5,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    }, {
        dataname: "Kabuterimon",
        names: {
            japanese: "Kabuterimon",
            english: "Kabuterimon"
        },
        // hp : 29,
        // attack : 42,
        // defense : 19,
        // speed : 10,
        max_level: 45,
        exp_growth: AVERAGE,
        evolutions: [
            {
                level: 42,
                // item: "Crest of Knowledge",
                evolvesTo: "AKabuterimonR"
            }
        ],
        // rebirth_gains : {
        // 	hp_buff : 0.05,
        // 	attack_buff : 0.1,
        // 	defense_buff : 0.05,
        // 	speed_buff : 0.05
        // },
        // bit_amount_buff : 10,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    }, {
        dataname: "AKabuterimonR",
        names: {
            japanese: "AtlurKabuterimon (Red)",
            english: "MegaKabuterimon (Red)"
        },
        // hp : 53,
        // attack : 66,
        // defense : 36,
        // speed : 20,
        max_level: 59,
        exp_growth: AVERAGE_SLOW,
        evolutions: [
            {
                level: 60,
                evolvesTo: "HKabuterimon"
            }
        ],
        // rebirth_gains : {
        // 	hp_buff : 0.05,
        // 	attack_buff : 0.1,
        // 	defense_buff : 0.05,
        // 	speed_buff : 0.05
        // },
        // bit_amount_buff : 20,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    }, {
        dataname: "HKabuterimon",
        names: {
            japanese: "HeraclesKabuterimon",
            english: "HerculesKabuterimon"
        },
        // hp : 67,
        // attack : 96,
        // defense : 56,
        // speed : 56,
        max_level : 80,
        exp_growth: SLOW,
        // rebirth_gains : {
        // 	hp_buff : 0.05,
        // 	attack_buff : 0.01,
        // 	defense_buff : 0.05,
        // 	speed_buff : 0.05
        // },
        // bit_amount_buff : 40,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    },
    {
        dataname: "Pichimon",
        names: {
            japanese: "Pichimon",
            english: "Pichimon"
        },
        // hp : 2,
        // attack : 1,
        // defense: 1,
        // speed : 1,
        max_level: 10,
        exp_growth: FASTEST,
        evolutions: [
            {
                level: 5,
                evolvesTo: "Pukamon"
            }
        ],
        // rebirthgains : {
        // 	hp_buff : 0.05,
        // 	attack_buff : 0.1,
        // 	defense_buff : 0.05,
        // 	speed_buff : 0.05
        // },
        // bit_amount_buff : 1
    }, {
        dataname: "Pukamon",
        names: {
            japanese: "Pukamon",
            english: "Bukamon"
        },
        // hp : 5,
        // attack : 5,
        // defense : 3,
        // speed : 2,
        max_level: 20,
        exp_growth: FAST,
        evolutions: [
            {
                level: 15,
                evolvesTo: "Gomamon"
            }
        ],
        // rebirth_gains : {
        // 	hp_buff : 0.05,
        // 	attack_buff : 0.1,
        // 	defense_buff : 0.05,
        // 	speed_buff : 0.05
        // },
        // bit_amount_buff : 2
    }, {
        dataname: "Gomamon",
        names: {
            japanese: "Gomamon",
            english: "Gomamon"
        },
        // hp : 13,
        // attack : 20,
        // defense : 10,
        // speed : 7,
        max_level: 30,
        exp_growth: AVERAGE_FAST,
        evolutions: [
            {
                level: 28,
                evolvesTo: "Ikkakumon"
            }
        ],
        // rebirth_gains : {
        // 	hp_buff : 0.05,
        // 	attack_buff : 0.1,
        // 	defense_buff : 0.05,
        // 	speed_buff : 0.05
        // },
        // bit_amount_buff : 5,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    }, {
        dataname: "Ikkakumon",
        names: {
            japanese: "Ikkakumon",
            english: "Ikkakumon"
        },
        // hp : 29,
        // attack : 42,
        // defense : 19,
        // speed : 10,
        max_level: 45,
        exp_growth: AVERAGE,
        evolutions: [
            {
                level: 42,
                item: "Crest of Sincerity",
                evolvesTo: "Zudomon"
            }
        ],
        // rebirth_gains : {
        // 	hp_buff : 0.05,
        // 	attack_buff : 0.1,
        // 	defense_buff : 0.05,
        // 	speed_buff : 0.05
        // },
        // bit_amount_buff : 10,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    }, {
        dataname: "Zudomon",
        names: {
            japanese: "Zudomon",
            english: "Zudomon"
        },
        // hp : 53,
        // attack : 66,
        // defense : 36,
        // speed : 20,
        max_level: 59,
        exp_growth: AVERAGE_SLOW,
        evolutions: [
            {
                level: 60,
                evolvesTo: "Vikemon"
            }
        ],
        // rebirth_gains : {
        // 	hp_buff : 0.05,
        // 	attack_buff : 0.1,
        // 	defense_buff : 0.05,
        // 	speed_buff : 0.05
        // },
        // bit_amount_buff : 20,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    }, {
        dataname: "Vikemon",
        names: {
            japanese: "Vikemon",
            english: "Vikemon"
        },
        // hp : 67,
        // attack : 96,
        // defense : 56,
        // speed : 56,
        max_level : 80,
        exp_growth: SLOW,
        // rebirth_gains : {
        // 	hp_buff : 0.05,
        // 	attack_buff : 0.01,
        // 	defense_buff : 0.05,
        // 	speed_buff : 0.05
        // },
        // bit_amount_buff : 40,
        // special_traits_drop : [ "Courage" ],
        // special_traits_usable : [ "Courage" ]
    },
]
