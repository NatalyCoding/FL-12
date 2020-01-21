function Fighter({ name, damage, strength, agility, health }) {

    this.name = name;
    this.damage = damage;
    this.strength = strength;
    this.agility = agility;
    this.health = health;

    let wins = 0;
    let losses = 0;

    const maxHealth = 100;

    return {

        getName: () => name,
        getDamage: () => damage,
        getStrength: () => strength,
        getAgility: () => agility,
        getHealth: () => health,
        addWin: () => wins++,
        addLoss: () => losses++,

        logCombatHistory: function() {
            console.log(`Name: ${name}, Wins: ${wins}, Losses: ${losses}`);
        },

        heal: function(heal) {
            health += heal;
            if (health > maxHealth) {
                health = maxHealth;
            }
        },

        dealDamage: function(madeDamage) {
            health -= madeDamage;
            if (health < 0) {
                health = 0;
            }
        },

        attack: function(defend) {
            let maxChance = 100;
            let probability = maxChance - (strength + agility);
            let random = Math.floor(Math.random() * maxChance);
            if (probability > random) {
                defend.dealDamage(damage);
                console.log(`${name} makes ${damage} damage to ${defend.getName()}`);
            } else {
                console.log(`${name} attack missed`);
            }
        }
    }
}


function battle(fighter1, fighter2) {
    if (fighter1.getHealth() === 0) {
        console.log(`${fighter1.getName()} is dead and can't fight.`);
    } else if (fighter2.getHealth() === 0) {
        console.log(`${fighter2.getName()} is dead and can't fight.`);
    } else {
        let round = 1;
        let two = 2;
        while (fighter1.getHealth() && fighter2.getHealth() !== 0) {
            round++ % two === 0 ? fighter2.attack(fighter1) : fighter1.attack(fighter2);
        }
        if (fighter1.getHealth() === 0) {
            console.log(`${fighter2.getName()} has won!`);
            fighter2.addWin();
            fighter1.addLoss();
        } else {
            console.log(`${fighter1.getName()} has won!`);
            fighter1.addWin();
            fighter2.addLoss();
        }
    }
}