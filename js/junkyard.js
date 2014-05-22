// list of all current enemies
var	enemyList = [];

// game init
var thisGame = new Game();
thisGame.enemyHealth();

// prompt stuff
$(function() {
	var initialText = "Welcome to the Junkard!<br />A "+thisGame.currentEnemy.type+" is about to attack you!<br />"
	initialText += "To attack type 'attack'.<br />";
	$('#prompt').html(initialText);
	$('#input').append('<input type="text" class="promptInput">');
	$('.promptInput').focus();

	// catch enter keypress
	$('.promptInput').keyup(function(e) {
		if(e.keyCode == 13) {
			if($(this).val() == "attack") {
				if(thisGame.currentEnemy.getHealth() == 0) {
					$('#prompt').append("It's dead man.  Let it go.<br />");
					$('.promptInput').val('');
				} else {
					var healthBeforeHit = thisGame.currentEnemy.getHealth();
					thisGame.hero.attackEnemy();
					$('#prompt').append($(this).val()+'<br />');
					$('#prompt').append('You hit the '+thisGame.currentEnemy.type+' for '+(healthBeforeHit-thisGame.currentEnemy.getHealth())+'!<br />');
					if (thisGame.currentEnemy.getHealth() == 0) {
						$('#prompt').append("You killed "+thisGame.currentEnemy.type+"! <br />");
					}
					$('.promptInput').val('');
				}
			} else {
				$('#prompt').append($(this).val());
				$('#prompt').append('<br />No, seriously type attack. Asshole. <br />');
				$('.promptInput').val('');
			}
		}
	})

})







