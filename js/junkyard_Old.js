// inventory init
function inventory() {
	this.bagSlots = [0,0,0,0];
	this.bagSpace = this.bagSlots.length;
	this.inventoryAvailable = function() {
		var currAvail = this.bagSpace;
		//console.log(1);
		for(i=1; i<this.bagSpace; i++) {
			//console.log(i);
			if(this.bagSlots[i] != 0) {
				currAvail--;
			}
		}
		return currAvail;
	};
}

function getEnemy() {
	return enemy.length;
}

// array for all current enemies
var enemyList = [];

$(function() {
	// Character init
	mainChar = new character(1,1);
	/*if (mainChar.name == '') {
		$('#prompt').html('Welcom to Junkyard Escape!<br />Pleae Enter Your Name...');
	};*/

	// inventory init
	bag = new inventory();

	// health display
	for(var i=0; i < mainChar.getHealth(); i++) {	
		$('.statusBar').append('<div class="healthBlock">');
	}

	// enemy init
	rat = new enemy(2,1,0,'rat');

})

/*$('#shell').terminal(
	function(command, term) {
		var input = new response(command);
		if (mainChar.name == '') {
			mainChar.name = input.command;
			$('#prompt').empty();
			term.echo('Hello '+mainChar.name+' prepare for adventure!');
			term.echo('An enemy rat approaches!');
		}
	}, 
	{
		prompt: '$  ',
		greetings: ''
	}
);*/

function response(comm) {
	this.command = comm;
}
