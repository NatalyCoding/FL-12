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
                console.log(`${name} makes ${damage} damage to ${defend.getName()}`)
            } else {
                console.log(`${name} attack missed`);
            }
        }
    }
}