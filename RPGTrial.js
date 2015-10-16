
/*
RPGTrial

Created by Brian Hixson-Simeral
10/10/2015
*/
var playerCharacter;
var theBigBad;

//Creating 3 functions for the player creation
//Each one coresponds to a button as I don't know another way to do the event handlers
function createWarrior(characterName, str, def, mag, res, acc, dod){
	playerCharacter = {
		"Name" : characterName,
		"Health" : 15 + def + res + dod,
		"Srength" : 8 + str,
		"Defence" : 6 + def,
		"Magic" : 1 + mag,
		"Resistance" : 3 + res,
		"Accuracy" : 4 + acc,
		"Dodge" : 3 + dod,
		"Weapon" : 0,
		"wSrength" : 0,
		"wDefence" : 0,
		"wMagic" : 0,
		"wResistance" : 0,
		"wAccuracy" : 0,
		"wDodge" : 0,
		"Initiative" : 50,
		"Experience" : 0,

		totStr : function() {
			return this.Strength + this.wStrength;
		},
		totDef : function() {
			return this.Defence + this.wDefence;
		},
		totMag : function() {
			return this.Magic + this.wMagic;
		},
		totRes : function() {
			return this.Resistance + this.wResistance;
		},
		totAcc : function() {
			return this.Accuracy + this.wAccuracy;
		},
		totDod : function() {
			return this.Dodge + this.wDodge;
		}
	};
}

function createRouge(characterName, str, def, mag, res, acc, dod){
	playerCharacter = {
		"Name" : characterName,
		"Health" : 11 + def + res + dod,
		"Srength" : 6 + str,
		"Defence" : 3 + def,
		"Magic" : 0 + mag,
		"Resistance" : 3 + res,
		"Accuracy" : 7 + acc,
		"Dodge" : 9 + dod,
		"Weapon" : 0,
		"wSrength" : 0,
		"wDefence" : 0,
		"wMagic" : 0,
		"wResistance" : 0,
		"wAccuracy" : 0,
		"wDodge" : 0,
		"Initiative" : 60,
		"Experience" : 0,

		totStr : function() {
			return this.Strength + this.wStrength;
		},
		totDef : function() {
			return this.Defence + this.wDefence;
		},
		totMag : function() {
			return this.Magic + this.wMagic;
		},
		totRes : function() {
			return this.Resistance + this.wResistance;
		},
		totAcc : function() {
			return this.Accuracy + this.wAccuracy;
		},
		totDod : function() {
			return this.Dodge + this.wDodge;
		}
	};
}

function createWizard(characterName, str, def, mag, res, acc, dod){
	playerCharacter = {
		"Name" : characterName,
		"Health" : 11 + def + res + dod,
		"Srength" : 1 + str,
		"Defence" : 4 + def,
		"Magic" : 8 + mag,
		"Resistance" : 7 + res,
		"Accuracy" : 5 + acc,
		"Dodge" : 3 + dod,
		"Weapon" : 0,
		"wSrength" : 0,
		"wDefence" : 0,
		"wMagic" : 0,
		"wResistance" : 0,
		"wAccuracy" : 0,
		"wDodge" : 0,
		"Initiative" : 65,
		"Experience" : 0,

		totStr : function() {
			return this.Strength + this.wStrength;
		},
		totDef : function() {
			return this.Defence + this.wDefence;
		},
		totMag : function() {
			return this.Magic + this.wMagic;
		},
		totRes : function() {
			return this.Resistance + this.wResistance;
		},
		totAcc : function() {
			return this.Accuracy + this.wAccuracy;
		},
		totDod : function() {
			return this.Dodge + this.wDodge;
		}
	};
}

//create all monsters and store their stats
//Name is the ID of the character
//Every other state is entirely gameplay based
function createCharacter(characterName, hp, str, def, mag, res, acc, dod, exp, init){
	theBigBad = {
		"Name" : characterName,
		"Health" : hp,
		"Srength" : str,
		"Defence" : def,
		"Magic" : mag,
		"Resistance" : res,
		"Accuracy" : acc,
		"Dodge" : dod,
		"Weapon" : 0,
		"wSrength" : 0,
		"wDefence" : 0,
		"wMagic" : 0,
		"wResistance" : 0,
		"wAccuracy" : 0,
		"wDodge" : 0,
		"Initiative" : init,
		"Experience" : exp,

		totStr : function() {
			return this.Strength + this.wStrength;
		},
		totDef : function() {
			return this.Defence + this.wDefence;
		},
		totMag : function() {
			return this.Magic + this.wMagic;
		},
		totRes : function() {
			return this.Resistance + this.wResistance;
		},
		totAcc : function() {
			return this.Accuracy + this.wAccuracy;
		},
		totDod : function() {
			return this.Dodge + this.wDodge;
		}
	};
}


//The functions to create the monster's stats
//These will be called when the player encounters a monster
//The monster that the player fights is determined by Math.random()
var slimeCount = 0;
function createSlime(){
	createCharacter("Slime" + slimeCount, 7, 2, 4, 0, 2, 5, 5, 5, 30);
	slimeCount++;
}

var boarCount = 0;
function createBoar(){
	createCharacter("Boar" + boarCount, 12, 5, 5, 0, 1, 6, 4, 9, 40);
	boarCount++;
}

var koboldMageCount = 0;
function createKoboldMage(){
	createCharacter("Kobold Mage" + koboldMageCount, 23, 6, 7, 12, 10, 10, 6, 25, 40);
	koboldMageCount++;
}

var dragonCount = 0;
function createDragon(){
	createCharacter("Dragon" + dragonCount, 102, 24, 30, 18, 23, 12, 16, 250, 60);
	dragonCount++;
}


function randomBound(lowerBound, randModifier){
  return Math.ceil(Math.random()*randModifier)+lowerBound;
}



//if the player or monster decides to attack with strength
function attack (unit1, unit2){
	var hitFloor = 50 + unit2.totDod() - unit1.totAcc();
	var hitRoll = Math.ceil(Math.random()*100);
	var critChance = 100 - unit1.totAcc();
  var damageDealt;

	//crit
	if(hitRoll > critChance){
		//print crit message
		damageDealt = Math.floor(2.5 * unit1.totStr()) - unit2.totDef();
		if(damageDealt > 0){
			//print damage message
			unit2.Health -= damageDealt;
		}
		else{
			//print 0 damage message
		}

	}
	//hit
	else if(hitRoll > hitFloor){
		//print hit message
		damageDealt = unit1.totStr() - unit2.totDef();
		if(damageDealt > 0){
			//print damage message
			unit2.Health -= damageDealt;
		}
		else{
			//print 0 damage message
		}
	}
	//miss
	else{
		//print missed attack message
	}
}

//if the player or monster decides to attack with magic
function cast (unit1, unit2){
	var hitFloor = 50 + unit2.totDod() - unit1.totAcc();
	var hitRoll = Math.ceil(Math.random()*100);
	var critChance = 100 - unit1.totAcc();
  var damageDealt;

	//crit
	if(hitRoll > critChance){
		//print crit message
		damageDealt = Math.floor(2.5 * unit1.totMag()) - unit2.totRes();
		if(damageDealt > 0){
			//print damage message
			unit2.Health -= damageDealt;
		}
		else{
			//print 0 damage message
		}

	}
	//hit
	else if(hitRoll > hitFloor){
		//print hit message
		damageDealt = unit1.totMag() - unit2.totRes();
		if(damageDealt > 0){
			//print damage message
			unit2.Health -= damageDealt;
		}
		else{
			//print 0 damage message
		}
	}
	//miss
	else{
		//print missed attack message
	}
}




//creates a weapon that the player may equip
function createWeapon(){
	var statArray = [0, 0, 0, 0, 0, 0];
	var weaponType = Math.ceil(Math.random()*100);
	var weaponClass = Math.ceil(Math.random()*100);
  var bonusStrength;
  var bonusDefence;
  var bonusMagic;
  var bonusResistance;
  var bonusAccuracy;
  var bonusDodge;

	//print the weapon type and the weapon class
	if(weaponType < 34){
		//Sword and shield
		if(weaponClass < 60){
			bonusStrength = randomBound(3, 7);
			bonusDefence = randomBound(3, 7);

		}
		else if(weaponClass < 90){
			bonusStrength = randomBound(7, 14);
			bonusDefence = randomBound(7, 14);
		}
		else{
			bonusStrength = randomBound(15, 20);
			bonusDefence = randomBound(15, 20);

		}
	}

	else if(weaponType < 67){
		//Tome and staff
		if(weaponClass < 60){
			bonusMagic = randomBound(3, 7);
			bonusResistance = randomBound(3, 7);
		}
		else if(weaponClass < 90){
			bonusMagic = randomBound(7, 14);
			bonusResistance = randomBound(7, 14);
		}
		else{
			bonusMagic = randomBound(15, 20);
			bonusResistance = randomBound(15, 20);
		}
	}

	else if(weaponType < 100){
		//Cloak and dagger
		if(weaponClass < 60){
			bonusAccuracy = randomBound(3, 7);
			bonusDodge = randomBound(3, 7);
		}
		else if(weaponClass < 90){
			bonusAccuracy = randomBound(7, 14);
			bonusDodge = randomBound(7, 14);
		}
		else{
			bonusAccuracy = randomBound(15, 20);
			bonusDodge = randomBound(15, 20);

		}
	}

	else if(weaponType == 100){
		//Magic amulet
		if(weaponClass < 60){
			bonusStrength = randomBound(3, 7);
			bonusDefence = randomBound(3, 7);
			bonusMagic = randomBound(3, 7);
			bonusResistance = randomBound(3, 7);
			bonusAccuracy = randomBound(3, 7);
			bonusDodge = randomBound(3, 7);

		}
		else if(weaponClass < 90){
			bonusStrength = randomBound(7, 14);
			bonusDefence = randomBound(7, 14);
			bonusMagic = randomBound(7, 14);
			bonusResistance = randomBound(7, 14);
			bonusAccuracy = randomBound(7, 14);
			bonusDodge = randomBound(7, 14);

		}
		else{
			bonusStrength = randomBound(15, 20);
			bonusDefence = randomBound(15, 20);
			bonusMagic = randomBound(15, 20);
			bonusResistance = randomBound(15, 20);
			bonusAccuracy = randomBound(15, 20);
			bonusDodge = randomBound(15, 20);
		}
	}

	statArray[0] = bonusStrength;
	statArray[1] = bonusDefence;
	statArray[2] = bonusMagic;
	statArray[3] = bonusResistance;
	statArray[4] = bonusAccuracy;
	statArray[5] = bonusDodge;
	//print the stats
	return statArray;
}

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
