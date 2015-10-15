/*
Logic for combat
created by Brian Hixson-Simeral 10/12/2015
*/

var attackMove = true;
var caster = false;
var attacker = false;
var pDamage = 0;
var mDamage = 0;

//determines who goes first
function initiativeRoll(initiative){
	return (Math.random()*100)+initiative;
}

function enemyMove(){
    if (!caster){
	attackMove = false;
}
    else if(!attacker){
	attackMove = true;
}
    else if(mDamage > pDamage){
	attackMove = false;
}
    else if(pDamage > mDamage){
	attackMove = true;
}
    if(attackMove){
	if(Math.random() < 0.8){
	    attack(theBigBad, playerCharacter);
	    pDamage = attack.damageDealt;
}
	else{
	    cast(theBigBad, playerCharacter);
	    mDamage = cast.damageDealt;
}
}

    else if(!attackMove){
	if(Math.random() < 0.8){
	    cast(theBigBad, playerCharacter);
	    mDamage = cast.damageDealt;
}
	else{
	    attack(theBigBad, playerCharacter);
	    pDamage = attack.damageDealt;
}
}
}

function combatEncounter (){
    var enemyRoll = Math.floor(Math.random()*100);
    if(enemyRoll < 40){
	createSlime();
}
    else if(enemyRoll < 60){
	createBoar();
}
    else if(enemyRoll < 85){
	createKoboldMage();
}
    else{
	createDragon();
}
    attackMove = true;
		caster = false;
		attacker = false;
		pDamage = 0;
		mDamage = 0;
    var playerTurn = initiativeRoll(playerCharacter.initiative) > initiativeRoll(theBigBad.initiative);

    while(theBigBad.Health !== 0 || playerCharacter.Health !== 0){
    while (playerTurn){
	
}
    if (!playerTurn){
	enemyMove();
}
}
}
