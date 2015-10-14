/*
Logic for combat
created by Brian Hixson-Simeral 10/12/2015
*/

function initiativeRoll(initiative){
	return Math.random()*initiative;
};
var playerTurn = initiativeRoll(playerCharacter.initiative) > initiativeRoll(theBigBad.initiative);


function combatEncounter (){
	while(moveCount < 1){

	}
}