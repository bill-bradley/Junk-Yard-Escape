
///////////////////////////////////////////////
/////////  Hero Stuff /////////////////////////
///////////////////////////////////////////////
function Character(strength, armor) {
	this.name = 'Dan';
	this.gender = 'male';
	this.health = 4;
	this.startingHealth = this.health;
	this.strength = strength;
	this.armor = armor;
	this.getHealth = function() {
		return this.health;
	};
	this.healthDisplay = function() {
		for(var i=0; i < this.getHealth(); i++) {
			$('.statusBar').append('<div class="healthBlock" id="heroHealth_'+i+'">');
		}
		$('#heroHPText').append("HP:&nbsp;&nbsp;");
	};
}
Character.prototype.getEnemyToAttack = function() {
	var targetArray = enemyList.concat();
	return targetArray[0];
};
Character.prototype.attackEnemy = function() {
	var damageDone = calcDamage(this.strength, this.getEnemyToAttack().armor);
	this.getEnemyToAttack().health = adjustHealth(this.getEnemyToAttack().getHealth(), damageDone);
	this.getEnemyToAttack().updateHealth(damageDone);
};
Character.prototype.updateHealth = function(dmg) {
	for(var i=0; i<dmg; i++) {
		if($('#heroHealth_'+i).attr("class") == "healthBlockSpent") {
			dmg++;
		} else {
			$('#heroHealth_'+i).removeClass("healthBlock");
			$('#heroHealth_'+i).addClass("healthBlockSpent");
		}
	}
};


///////////////////////////////////////////////
////////  Enemy Stuff /////////////////////////
///////////////////////////////////////////////
function Enemy(health, strength, armor, type) {
	this.health = health;
	this.startingHealth = health;
	this.strength = strength;
	this.armor = armor;
	this.type = type;
	this.getHealth = function() {
		return this.health;
	};
	this.healthDisplay = function() {
		//$('#enemyHP').html("Enemy HP:&nbsp;&nbsp;");
		for(var i=0; i < this.getHealth(); i++) {
			$('#enemyHP').append('<div class="healthBlock" id="enemyHealth_'+i+'">');
		}
		$('#enemyHPText').append("Enemy HP:&nbsp;&nbsp;");
	};
	return enemyList.push(this);
}
Enemy.prototype.updateHealth = function(dmg) {
	for(var i=0; i<dmg; i++) {
		if($('#enemyHealth_'+i).attr("class") == "healthBlockSpent") {
			dmg++;
		} else {
			$('#enemyHealth_'+i).removeClass("healthBlock");
			$('#enemyHealth_'+i).addClass("healthBlockSpent");
		}
	}
};
Enemy.prototype.attackHero = function() {
	var damageDone =  calcDamage(this.strength, thisGame.hero.armor);
	thisGame.hero.health = adjustHealth(thisGame.hero.getHealth(), damageDone);
	thisGame.hero.updateHealth(damageDone);
}
