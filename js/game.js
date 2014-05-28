// Game Class
function Game() {
	// inventory init
	this.bag = new Inventory();

	// Character init
	this.hero = new Character(1,1);

	// enemy init
	this.currentEnemy = new Enemy(
			this.getRandomStats().health,
			this.getRandomStats().strength,
			this.getRandomStats().armor,
			this.getRandomEnemy()
		);

	// health display
	this.heroHealth = this.hero.healthDisplay();
}
Game.prototype.enemyHealth = function() {
	for(var i=0; i<enemyList.length; i++) {
		enemyList[i].healthDisplay();
	}
}
Game.prototype.getRandomEnemy = function() {
	var enemyTypeList = [
		'rat',
		'junkard dog',
		'hobo',
		'garbage man',
		'dad',
		'some sort of living pile of tires'
	];
	var randomIndex = Math.floor(Math.random()*enemyTypeList.length);
	return enemyTypeList[randomIndex];
};
Game.prototype.getRandomStats = function() {
	var randStat = function(){
		return Math.floor(Math.random()*(5-1)+1);
	};
	var enemyStats = {
		"health": randStat(),
		"strength": randStat(),
		"armor": this.hero.strength -1
	};
	return enemyStats;
};
