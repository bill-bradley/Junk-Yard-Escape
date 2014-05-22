function calcDamage(attackerStrength, defenderArmor) {
	var totalDamage = attackerStrength - defenderArmor;
	return (totalDamage <= 0) ? 0 : totalDamage;
}

function adjustHealth(currentHealth, damage) {
	var totalHealth = currentHealth - damage;
	return (totalHealth <= 0) ? 0 : totalHealth;
}