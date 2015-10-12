/*
RPGTrial

Created by Brian Hixson-Simeral
10/10/2015
*/

//Creating 3 functions for the player creation
//Each one coresponds to a button as I don't know another way to do the event handlers
function createWarrior(characterName, str, def, mag, res, acc, dod){
	var playerCharacter = {
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
		"Experience" : 0

		totStr : function() {
			return this.Strength + this.wStrength;
		}
		totDef : function() {
			return this.Defence + this.wDefence;
		}
		totMag : function() {
			return this.Magic + this.wMagic;
		}
		totRes : function() {
			return this.Resistance + this.wResistance;
		}
		totAcc : function() {
			return this.Accuracy + this.wAccuracy;
		}
		totDod : function() {
			return this.Dodge + this.wDodge;
		}
	}
}

function createRouge(characterName, str, def, mag, res, acc, dod){
	var playerCharacter = {
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
		"Experience" : 0

		totStr : function() {
			return this.Strength + this.wStrength;
		}
		totDef : function() {
			return this.Defence + this.wDefence;
		}
		totMag : function() {
			return this.Magic + this.wMagic;
		}
		totRes : function() {
			return this.Resistance + this.wResistance;
		}
		totAcc : function() {
			return this.Accuracy + this.wAccuracy;
		}
		totDod : function() {
			return this.Dodge + this.wDodge;
		}
	}
}

function createWizard(characterName, str, def, mag, res, acc, dod){
	var playerCharacter = {
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
		"Experience" : 0

		totStr : function() {
			return this.Strength + this.wStrength;
		}
		totDef : function() {
			return this.Defence + this.wDefence;
		}
		totMag : function() {
			return this.Magic + this.wMagic;
		}
		totRes : function() {
			return this.Resistance + this.wResistance;
		}
		totAcc : function() {
			return this.Accuracy + this.wAccuracy;
		}
		totDod : function() {
			return this.Dodge + this.wDodge;
		}
	}
}

//create all monsters and store their stats
//Name is the ID of the character
//Every other state is entirely gameplay based
function createCharacter(characterName, hp, str, def, mag, res, acc, dod, exp){
	var theBigBad = {
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
		"Experience" : exp

		totStr : function() {
			return this.Strength + this.wStrength;
		}
		totDef : function() {
			return this.Defence + this.wDefence;
		}
		totMag : function() {
			return this.Magic + this.wMagic;
		}
		totRes : function() {
			return this.Resistance + this.wResistance;
		}
		totAcc : function() {
			return this.Accuracy + this.wAccuracy;
		}
		totDod : function() {
			return this.Dodge + this.wDodge;
		}
	}
}





//The functions to create the monster's stats
//These will be called when the player encounters a monster
//The monster that the player fights is determined by Math.random()
function createSlime(){
	createCharacter("Slime" + slimeCount, 7, 2, 4, 0, 2, 5, 5, 5);
	slimeCount++;
}

function createBoar(){
	createCharacter("Boar" + boarCount, 12, 5, 5, 0, 1, 6, 4, 9);
	boarCount++;
}

function createKoboldMage(){
	createCharacter("Kobold Mage" + kobolMageCount, 23, 6, 7, 12, 10, 10, 6, 25);
	kobolMageCount++;
}

function createDragon(){
	createCharacter("Dragon" + dragonCount, 102, 24, 30, 18, 23, 12, 16, 250);
	dragonCount++;
}






//if the player or monster decides to attack with strength
function attack (unit1, unit2){
	var hitFloor = 50 + unit2.totDod() - unit1.totAcc();
	var hitRoll = Math.ceil(Math.random()*100);
	var critChance = 100 - unit1.totAcc();

	//crit
	if(hitRoll > critChance){
		//print crit message
		var damageDealt = Math.floor(2.5 * unit1.totStr()) - unit2.totDef();
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
		var damageDealt = unit1.totStr() - unit2.totDef();
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

	//crit
	if(hitRoll > critChance){
		//print crit message
		var damageDealt = Math.floor(2.5 * unit1.totMag()) - unit2.totRes();
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
		var damageDealt = unit1.totMag() - unit2.totRes();
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

	//print the weapon type and the weapon class
	if(weaponType < 34){
		//Sword and shield
		if(weaponClass < 60){
			var bonusStrength = Math.ceil(Math.random() * 7) + 3;
			var bonusDefence = Math.ceil(Math.random() * 7) + 3;

		}
		else if(weaponClass < 90){
			var bonusStrength = Math.ceil(Math.random() * 14) + 7;
			var bonusDefence = Math.ceil(Math.random() * 14) + 7;
		}
		else{
			var bonusStrength = Math.ceil(Math.random() * 20) + 15;
			var bonusDefence = Math.ceil(Math.random() * 20) + 15;

		}
	}

	else if(weaponType < 67){
		//Tome and staff
		if(weaponClass < 60){
			var bonusMagic = Math.ceil(Math.random() * 7) + 3;
			var bonusResistance = Math.ceil(Math.random() * 7) + 3;
		}
		else if(weaponClass < 90){
			var bonusMagic = Math.ceil(Math.random() * 14) + 7;
			var bonusResistance = Math.ceil(Math.random() * 14) + 7;
		}
		else{
			var bonusMagic = Math.ceil(Math.random() * 20) + 15;
			var bonusResistance = Math.ceil(Math.random() * 20) + 15;
		}
	}

	else if(weaponType < 100){
		//Cloak and dagger
		if(weaponClass < 60){
			var bonusAccuracy = Math.ceil(Math.random() * 7) + 3;
			var bonusDodge = Math.ceil(Math.random() * 7) + 3;
		}
		else if(weaponClass < 90){
			var bonusAccuracy = Math.ceil(Math.random() * 14) + 7;
			var bonusDodge = Math.ceil(Math.random() * 14) + 7;
		}
		else{
			var bonusAccuracy = Math.ceil(Math.random() * 20) + 15;
			var bonusDodge = Math.ceil(Math.random() * 20) + 15;

		}
	}

	else if(weaponType = 100){
		//Magic amulet
		if(weaponClass < 60){
			var bonusStrength = Math.ceil(Math.random() * 7) + 3;
			var bonusDefence = Math.ceil(Math.random() * 7) + 3;
			var bonusMagic = Math.ceil(Math.random() * 7) + 3;
			var bonusResistance = Math.ceil(Math.random() * 7) + 3;
			var bonusAccuracy = Math.ceil(Math.random() * 7) + 3;
			var bonusDodge = Math.ceil(Math.random() * 7) + 3;

		}
		else if(weaponClass < 90){
			var bonusStrength = Math.ceil(Math.random() * 14) + 7;
			var bonusDefence = Math.ceil(Math.random() * 14) + 7;
			var bonusMagic = Math.ceil(Math.random() * 14) + 7;
			var bonusResistance = Math.ceil(Math.random() * 14) + 7;
			var bonusAccuracy = Math.ceil(Math.random() * 14) + 7;
			var bonusDodge = Math.ceil(Math.random() * 14) + 7;

		}
		else{
			var bonusStrength = Math.ceil(Math.random() * 20) + 15;
			var bonusDefence = Math.ceil(Math.random() * 20) + 15;
			var bonusMagic = Math.ceil(Math.random() * 20) + 15;
			var bonusResistance = Math.ceil(Math.random() * 20) + 15;
			var bonusAccuracy = Math.ceil(Math.random() * 20) + 15;
			var bonusDodge = Math.ceil(Math.random() * 20) + 15;
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