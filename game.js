//Global variables
var heroChoosen = false;
var enemyChoosen = false;
var combatReady = false;
var cowboyPicked = false;
var bigButtpicked = false;
var scientistPicked = false;
var edgeLordPicked = false;
var gameOver = false;
var winner = false;
var alive = true;
var koTarget = false;
var knockedOut = false;


//Heroe's hp tracker
var mccreeHP = 200;
var widowHP = 200;
var winstonHP = 500;
var reaperHP = 250;
var currentHeroHP = 0;
//currentHeroHP = currentHero.health;
var currentEnemyHP = 0;
// currentEnemyHP = currentEnemy.health;
//display current HP values
$('#mccree-hp').html("McCree HP: " + mccreeHP); 
$('#widow-hp').html("Widowmaker HP: " + widowHP);
$('#winston-hp').html("Winston HP: " + winstonHP);
$('#gab-hp').html("Reaper HP: " + reaperHP);

//counter attack values
var counterAttack = 0;
//attack value
var attack = 0;

var currentHero = "";
var currentEnemy= "";
var availbleHeroes= ["mcCreeReporting", "spiderWeb", "peanutButterAddict", "angstyPsyco"]
var enemyHeroes = ['McCree', 'WidowMaker', 'Winston', 'Reaper']
// Hero Selection: McCree, WidowMaker, Winston, and Reaper stats and counter Attack values
var mcCreeReporting = {
	name: "McCree",
	attack: 20,
	gain: 10,
	health: 200,
	counterAttack: {
		WidowMaker: 30,
		Winston: 50,
		Reaper: 75,
	},
	image: "assets/mcCreePic.jpg",
}
var spiderWeb = {
	name: "Widowmaker",
	attack: 100,
	gain: 10,
	health: 200,
	counterAttack: {
		McCree: 100,
		Winston: 13,
		Reaper: 10,
	},
	image: "assets/widowmakerPic.jpg",
}
var peanutButterAddict = {
	name: "Winston",
	attack: 30,
	health: 500,
	counterAttack: {
		McCree: 5,
		WidowMaker: 35,
		Reaper: 50,
	},
	image: "assets/winstonPic.jpg",
};
var angstyPsyco = {
	name: "Reaper",
	attack: 90,
	health: 250,
	counterAttack: {
		McCree: 20,
		WidowMaker: 10,
		Winston: 300,
	},
	image: "assets/reaperPic.jpg",
};

console.log(peanutButterAddict);
console.log(mcCreeReporting.counterAttack.WidowMaker);
console.log(spiderWeb.health);
console.log(angstyPsyco.image);
console.log(peanutButterAddict.counterAttack.McCree);
console.log(angstyPsyco.attack);

	//$('.hero-port').on(function(){
	
		//var heroVal = this.value;
		//console.log(heroVal);
		//currentHero = availbleHeroes[heroVal];
	$("#mcCree-picture").on("click", function(){
		if (heroChoosen === false) {
		currentHero = mcCreeReporting;
		$("#choosen-one").attr("src", currentHero.image);
		currentHeroHP = currentHero.health;
		$("#choosen-hp").html(currentHero.name + " HP: " + currentHeroHP);
		heroChoosen = true;
		cowboyPicked = true;
		console.log(currentHero);
	} else { if (enemyChoosen === false) {
		currentEnemy = mcCreeReporting;
		counterAttack = currentHero.counterAttack.currentHero;
		$("#choosen-target").attr("src", currentEnemy.image);
		currentEnemyHP = currentEnemy.health;
		$("#target-hp").html(currentEnemy.name + " HP: " + currentEnemyHP);
		enemyChoosen = true;
		cowboyPicked = true;
		console.log(currentEnemy);
		};
	};
	if (cowboyPicked === true) {
		$("#mcCree-picture").hide( "fast", function() {
    		// Use arguments.callee so we don't need a named function
    		$( this ).prev().hide( "fast", arguments.callee );

  			});
		};
	});
	$("#widow-picture").on("click", function(){
		if (heroChoosen === false) {
			currentHero = spiderWeb;
			$("#choosen-one").attr("src", currentHero.image);
			currentHeroHP = currentHero.health;
			$("#choosen-hp").html(currentHero.name + " HP: " + currentHeroHP);
			heroChoosen = true;
			bigButtpicked = true;
			console.log(currentHero);
		} else { 
			if (enemyChoosen === false){
			currentEnemy = spiderWeb;
			counterAttack = currentHero.counterAttack.currentHero;
			$("#choosen-target").attr("src", currentEnemy.image);
			currentEnemyHP = currentEnemy.health;
			$("#target-hp").html(currentEnemy.name + " HP: " + currentEnemyHP);
			enemyChoosen = true;
			console.log(currentEnemy);
			bigButtpicked = true;
		}
	};
	if (bigButtpicked === true) {
		$("#widow-picture").hide( "fast", function() {
    		// Use arguments.callee so we don't need a named function
    		$( this ).prev().hide( "fast", arguments.callee );

  			});
		};
	});
	$("#winston-picture").on("click", function(){
		if (heroChoosen === false) {
		currentHero = peanutButterAddict;
		$("#choosen-one").attr("src", currentHero.image);
		currentHeroHP = currentHero.health;
		currentEnemyHP = currentEnemy.health;
		$("#choosen-hp").html(currentHero.name + " HP: " + currentHeroHP);
		heroChoosen = true;
		scientistPicked = true;
		console.log(currentHero);
	}  else { 
			if (enemyChoosen === false){
			currentEnemy = peanutButterAddict;
			counterAttack = currentHero.counterAttack.currentHero;
			$("#choosen-target").attr("src", currentEnemy.image);
			currentEnemyHP = currentEnemy.health;
			$("#target-hp").html(currentEnemy.name + " HP: " + currentEnemyHP);
			enemyChoosen = true;
			console.log(currentEnemy);
			scientistPicked = true;
		}
	};
	if (scientistPicked === true) {
		$("#winston-picture").hide( "fast", function() {
    		// Use arguments.callee so we don't need a named function
    		$( this ).prev().hide( "fast", arguments.callee );
  			});
		};
	});
	$("#gab-picture").on("click", function(){
		if (heroChoosen === false) {
		currentHero = angstyPsyco;
		$("#choosen-one").attr("src", currentHero.image);
		currentHeroHP = currentHero.health;
		$("#choosen-hp").html(currentHero.name + " HP: " + currentHeroHP);
		heroChoosen = true;
		edgeLordPicked = true;
		console.log(currentHero);
		} else { 
			if (enemyChoosen === false){
			currentEnemy = angstyPsyco;
			counterAttack = currentHero.counterAttack.currentHero;
			$("#choosen-target").attr("src", currentEnemy.image);
			currentEnemyHP = currentEnemy.health;
			$("#target-hp").html(currentEnemy.name + " HP: " + currentEnemyHP);
			enemyChoosen = true;
			console.log(currentEnemy);
			edgeLordPicked = true;
		}
	};
	if (edgeLordPicked === true) {
		$("#gab-picture").hide( "fast", function() {
    		// Use arguments.callee so we don't need a named function
    		$( this ).prev().hide( "fast", arguments.callee );
  			});
		};
	});
	$("#button-attack").on("click", function(){ 
		if (knockedOut === false || koTarget ===false) {}
		currentEnemyHP = currentEnemyHP -= attack;
		attack = +=currentHero.gain;
	});
