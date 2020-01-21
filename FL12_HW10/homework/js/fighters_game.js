function Fighter({ name, damage, strength, agility, health }) {

    this.name = name;
    this.damage = damage;
    this.strength = strength;
    this.agility = agility;
    this.health = health;

    let wins = 0;
    let losses = 0;

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
        }
    }
}