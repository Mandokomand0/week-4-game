//Global variables
var herochosen = false;
var enemychosen = false;
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


//Hero's hp tracker
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
    	McCree: 199,
        WidowMaker: 100,
        Winston: 5,
        Reaper: 20,
    },
    image: "assets/mcCreePic.jpg",
};

var spiderWeb = {
    name: "Widowmaker",
    attack: 100,
    gain: 10,
    health: 200,
    counterAttack: {
        McCree: 100,
        Widowmaker: 200,
        Winston: 13,
        Reaper: 10,
    },
    image: "assets/widowmakerPic.jpg",
};

var peanutButterAddict = {
    name: "Winston",
    attack: 30,
    health: 500,
    gain: 30,
    counterAttack: {
        McCree: 50,
        WidowMaker: 13,
        winston: 449,
        Reaper: 150,
    },
    image: "assets/winstonPic.jpg",
};

var angstyPsyco = {
    name: "Reaper",
    attack: 90,
    health: 250,
    gain: 10,
    counterAttack: {
        McCree: 75,
        WidowMaker: 10,
        Winston: 50,
        Reaper: 249,
    },
    image: "assets/reaperPic.jpg",
};

//console.log(peanutButterAddict);
//console.log(mcCreeReporting.counterAttack.WidowMaker);
//console.log(spiderWeb.health);
//console.log(angstyPsyco.image);
//console.log(peanutButterAddict.counterAttack.McCree);
//console.log(angstyPsyco.attack);

    //$('.hero-port').on(function(){
    
        //var heroVal = this.value;
        //console.log(heroVal);
        //currentHero = availbleHeroes[heroVal];
    $("#mcCree-picture").on("click", function(){
        if (herochosen === false) {
        herochosen = true;         
        currentHero = mcCreeReporting;
        attack = currentHero.attack;
        $("#chosen-one").attr("src", currentHero.image);
        currentHeroHP = mccreeHP;
        //$("#chosen-hp").html(currentHero.name + " HP: " + currentHeroHP);
        knockedOut = false;     
        cowboyPicked = true;
        console.log(currentHero);
    } else { if (enemychosen === false) {
        currentEnemy = mcCreeReporting;
        counterAttack = currentHero.counterAttack.McCree;
        $("#chosen-target").attr("src", currentEnemy.image);
        currentEnemyHP = mccreeHP;
        //$("#target-hp").html(currentEnemy.name + " HP: " + currentEnemyHP);
        koTarget = false;       
        enemychosen = true;
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
    refreshDisplay();
    });
    $("#widow-picture").on("click", function(){
        if (herochosen === false) {
            herochosen = true;         
            currentHero = spiderWeb;
            attack = currentHero.attack;
            $("#chosen-one").attr("src", currentHero.image);
            currentHeroHP = currentHero.health;
            //$("#chosen-hp").html(currentHero.name + " HP: " + currentHeroHP);
            knockedOut = false;
            bigButtpicked = true;
            console.log(currentHero);
        } else { 
            if (enemychosen === false){
            currentEnemy = spiderWeb;
            counterAttack = currentHero.counterAttack.WidowMaker;
            $("#chosen-target").attr("src", currentEnemy.image);
            currentEnemyHP = currentEnemy.health;
            //$("#target-hp").html(currentEnemy.name + " HP: " + currentEnemyHP);
            koTarget = false;
            enemychosen = true;
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
    refreshDisplay();
    });
    $("#winston-picture").on("click", function(){
        if (herochosen === false) {
        herochosen = true;         
        currentHero = peanutButterAddict;
        attack = currentHero.attack;
        $("#chosen-one").attr("src", currentHero.image);
        currentHeroHP = currentHero.health;
        //$("#chosen-hp").html(currentHero.name + " HP: " + currentHeroHP);
        knockedOut = false;     
        scientistPicked = true;
        console.log(currentHero);
    }  else { 
            if (enemychosen === false){
            currentEnemy = peanutButterAddict;
            counterAttack = currentHero.counterAttack.Winston;
            $("#chosen-target").attr("src", currentEnemy.image);
            currentEnemyHP = currentEnemy.health;
            //$("#target-hp").html(currentEnemy.name + " HP: " + currentEnemyHP);
            koTarget = false;           
            enemychosen = true;
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
    refreshDisplay();
    });
    $("#gab-picture").on("click", function(){
        if (herochosen === false) {
        herochosen = true;         
        currentHero = angstyPsyco;
        attack = currentHero.attack;
        $("#chosen-one").attr("src", currentHero.image);
        currentHeroHP = currentHero.health;
        //$("#chosen-hp").html(currentHero.name + " HP: " + currentHeroHP);
        knockedOut = false;     
        edgeLordPicked = true;
        console.log(currentHero);
        } else { 
            if (enemychosen === false){
            currentEnemy = angstyPsyco;
            counterAttack = currentHero.counterAttack.Reaper;
            $("#chosen-target").attr("src", currentEnemy.image);
            currentEnemyHP = currentEnemy.health;
            //$("#target-hp").html(currentEnemy.name + " HP: " + currentEnemyHP);
            koTarget = false;           
            enemychosen = true;
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
    refreshDisplay();
    });
    $("#button-attack").on("click", function(){ 
        if ( knockedOut === false && koTarget === false && enemychosen === true ) {
        currentEnemyHP -= attack;
        attack += currentHero.gain;
        if ( currentEnemyHP <= 0 ) {
        koTarget = true;
        enemyDead();
        } else {
        counter();
        }
        refreshDisplay();
        console.log(attack);
        console.log(currentEnemyHP);
        } else if ( knockedOut === true || enemychosen === true ){
        resetGame();
        }
    });
    
    function counter() {
        currentHeroHP -= counterAttack;
        if ( currentHeroHP <= 0 ) {
        knockedOut = true;
        heroDead();
        }
    }
    
    function refreshDisplay() {
        console.log("Triggered refreshDisplay");
        if ( herochosen === true && knockedOut === false ) {
        $("#chosen-hp").html(currentHero.name + " HP: " + currentHeroHP);
        }
        if ( enemychosen === true && koTarget === false ) {
        $("#target-hp").html(currentEnemy.name + " HP: " + currentEnemyHP);
        }
    }
    
    function heroDead() {
        $("#chosen-hp").html(currentHero.name + " is dead. Reset and play again!");
        $("#chosen-one").attr("src", "assets/skull.jpg");
        $("#button-attack h1").html("Reset");
    }
    
    function enemyDead() {
        if ( cowboyPicked === true &&
            bigButtpicked === true &&
            scientistPicked === true &&
            edgeLordPicked === true ) {
            $("#target-hp").html("You have defeated your foes! Reset to play again!");    
            $("#chosen-target").attr("src", "assets/skull.jpg");       
            $("#button-attack h1").html("Reset");            
        } else {
            $("#target-hp").html(currentEnemy.name + " is dead. Choose a new enemy!");    
            $("#chosen-target").attr("src", "assets/skull.jpg");
            enemychosen = false;
        }
    }
    
    
    function resetGame() {
        location.reload();
    }