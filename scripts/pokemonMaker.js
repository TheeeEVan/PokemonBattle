// import packages
var prompt = require('prompt-sync')();
const chalk = require("chalk");
const Spinner = require('cli-spinner').Spinner;
const fs = require("fs")

// invalid input function cause i dont wanna copy past this over and over again
function invalid() {
	console.log(chalk.bgRed(chalk.underline(" Invalid Input! ")))
}


// clear console
console.clear()
// welcome user
console.log(chalk.bgGreen(" Welcome to PokemonMaker! "))

// ask user if they want to create or edit a pokemon
console.log(chalk.bgWhite(chalk.black(" Would you like to? \n")) + "1. create a pokemon\n2. edit a pokemon")
let action = prompt()

while (action != "1" && action != "2")
{
	invalid()
	console.log(chalk.bgWhite(chalk.black(" Would you like to? \n")) + "1. create a pokemon\n2. edit a pokemon")
	action = prompt()
}

// create new pokemon
if (action == "1") {
	// clear console again cause it looks nicer
	console.clear()

	// title i guess?
	console.log(chalk.bold("Create a Pokemon"))

	// tell user about pokemon submission guidelines
	console.log("If you want your pokemon to get approved please make sure to follow the pokemon submission guidelines posted at:\n")
	
	// ask user for some basic details about a pokemon
}

// edit existing pokemon
else if (action == "2") {
	console.log(chalk.bgYellow("Coming Soon!"))
}