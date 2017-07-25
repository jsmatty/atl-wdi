///PART ONE: Create CONSTRUCTOR()//////

//write constructor function//class
//use this.propertyName = value//constructor
//add 3 properties: add foodInTummy, add restedness, add health
//set values forEach to 10/////this._____ = 10///
//add METHOD called *cry// cry function
// cry () function reduce foodInTummy by -1.//, this.foodInTummy--;
//console.log(foodInTummy.newValue)//(____ + this.foodInTummy)
//console.log("WAHH!!")
//create/make (2) NEW tamagotchi// var constructedObject1 = new tamagotchi();
//console.log NEW Objects to test//console.log(constructedObject1)
//invoke *Cry METHOD on each new constructed objects//_____1.cry();

///////PART TWO: Add ARGUMENTS///////
//*constructed objects, values, arguments to constructor function
//*takes input (params), PUT values into constructed Object

//In tamagotchi.js
//constructor function --> add params:
//        -name
//        -creatureType
//constructor Object--> add constructor function values:
//        -name
//        -creatureType
// add within the function
///*var hint: this.propertyName = parameterValue*///
//Cry Method --> console.log(tamagotchi name + the cry)
//create NEW tamagotchis
//forEach:
// -different names
// -creatureTypes
//invoke cry method forEach tamagotchi

/////////PART THREE: More METHODS/////////
///add PUKE Method
//Puke Function:
// - reduce foodInTummy by 1 (-1)
// - console.log (foodInTummy.newValue + "WAHH!")
///add YAWN Method
//Yawn Function:
// - reduce restedness by 1 (-1)
// - console log the values: [Tamagotchi's name] has current restedness of: [restedness]"
//create NEW tamagotchis
//test the methods
//console.log(name + altered values

/////PART FOUR: Add PLAYER/////////
//player.js = {player} object
//player object has:
// -name + (3) Methods: each(take tamagotchi as ARGUMENT)
// -1. feedTamagotchi
// -2. medicateTamagotchi
// -3. knockOutTamagotchi
//*underneath {Player} Object
//invoke each Player's action (seperately)
//pass in tamagotchi from part 1.
//*HINT: use tamagotchi object (tamagotchi1/tamagotchi2) as argument 
//to player's feedTamagotchi function: player.feedTamagotchi(tamagotchi1)

//////PART FIVE: START and STOP/////////////
/////"New Methods + Timers"/////
//tamagotchi constructor add methods:
// - Start
// - Stop
//use setInterval() method//
///*setInterval(function() {alert("hello"); }, 3000);
//START method will kick-off (3) TIMERS:
// 1.hungerTimer --> cry method, every[6000] secs.
// 2.yawnTimer --> cry method, every[10000] secs.
// 3.sickTimer --> cry method, every[20000] secs
//STOP method will stop the (3) timers
///use clearInterval() method
///*clearInterval(id_of_setInterval)///