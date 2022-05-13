/*

pokemonMaker.js
-----------------
a cli tool for creating user generated pokemon within the app

also i didn't know about inquirer when i made the create part of the script

*/

// import packages
var prompt = require('prompt-sync')({sigint: true, eot: true});
const chalk = require("chalk");
const Spinner = require('cli-spinner').Spinner;
const fs = require("fs")
const inquirer = require('inquirer');

// invalid input function cause i dont wanna copy past this over and over again
function invalid(text = "Invalid Input!") {
	console.log(chalk.bgRed(chalk.underline(` ${text} `)))
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
	// basic setup for creating pokemon
	let rawdata = fs.readFile('./src/data/pokemon.json', (err, data) => {
	    if (err) throw err;
	    let allPokemon = JSON.parse(data);

		/* ----- BASIC INFO ----- */
		
		// clear console again cause it looks nicer
		console.clear()
		
		// title
		console.log(chalk.underline(chalk.bold("Create a Pokemon")))

		// steps
		console.log("Basic info... □")
		console.log("Attacks... □")
		console.log("Confirm Pokemon... □")
		

		console.log("\n\n")
		
		// this will slowly become the object that gets put in pokemon.json
		let pokemon = {}
		
		// ask user for some basic details about a pokemon
		// name
		console.log(chalk.bold("What is your pokemon's name?"))
		let name = prompt()

		// make sure name isnt in use, if it is, ask again
		while (Object.keys(allPokemon).includes(name.toLowerCase()))
		{
			invalid(`${name} is already a pokemon!`)
			console.log(chalk.bold("\nWhat is your pokemon's name?"))
			name = prompt()
		}

		// store name
		pokemon.name = name

		// type
		console.log(chalk.bold("\nWhat type of pokemon is it?\n") + chalk.italic("1. Normal\n2. Fire\n3. Water\n4. Grass\n5. Electric\n6. Ice\n7. Fighting\n8. Poison\n9. Ground\n10. Flying\n11. Psycic\n12. Bug\n13. Rock\n14. Ghost\n15. Dragon\n16. Dark\n17. Steel\n18. Fairy "))
		let type = prompt()

		// check if entry is in the allowed options
		while (!parseInt(type) || parseInt(type) > 18 || parseInt(type) < 1) {
			invalid()
			console.log(chalk.bold("\nWhat type of pokemon is it?\n") + chalk.italic("1. Normal\n2. Fire\n3. Water\n4. Grass\n5. Electric\n6. Ice\n7. Fighting\n8. Poison\n9. Ground\n10. Flying\n11. Psycic\n12. Bug\n13. Rock\n14. Ghost\n15. Dragon\n16. Dark\n17. Steel\n18. Fairy "))
			type = prompt()
		}
		
		// check for every type cause for some reason i thought this was a good idea
		switch (type) {
			case "1":
				pokemon.type = "normal"
				break
			case "2":
				pokemon.type = "fire"
				break
			case "3":
				pokemon.type = "water"
				break
			case "4":
				pokemon.type = "grass"
				break
			case "5":
				pokemon.type = "electric"
				break
			case "6":
				pokemon.type = "ice"
				break
			case "7":
				pokemon.type = "fighting"
				break
			case "8":
				pokemon.type = "poison"
				break
			case "9":
				pokemon.type = "ground"
				break
			case "10":
				pokemon.type = "flying"
				break
			case "11":
				pokemon.type = "psycic"
				break
			case "12":
				pokemon.type = "bug"
				break
			case "13":
				pokemon.type = "rock"
				break
			case "14":
				pokemon.type = "ghost"
				break
			case "15":
				pokemon.type = "dragon"
				break
			case "16":
				pokemon.type = "dark"
				break
			case "17":
				pokemon.type = "steel"
				break
			case "18":
				pokemon.type = "fairy"
				break
		}

		// hp
		console.log(chalk.bold("\nHow much hp does the pokemon have?"))
		let hp = prompt()

		// make sure hp is a number
		while (!parseInt(hp)) {
			invalid()
			console.log(chalk.bold("\nHow much hp does the pokemon have?"))
			hp = prompt()
		}

		hp = parseInt(hp)

		// store the hp and also set maxhp
		pokemon.hp = parseInt(hp)
		pokemon.maxhp = parseInt(hp)

		// energy
		console.log(chalk.bold("\nHow much energy does the pokemon have?"))
		let energy = prompt()

		// check if energy is a number
		while (!parseInt(energy)) {
			invalid()
			console.log(chalk.bold("\nHow much energy does the pokemon have?"))
			energy = prompt()
		}

		energy = parseInt(energy)

		// store energy and maxEnergy
		pokemon.energy = parseInt(energy)
		pokemon.maxEnergy = parseInt(energy)

		/* ----- Attacks ----- */

		// create object for the attacks
		pokemon.moves = {}
		
		// clear console again cause it looks nicer
		console.clear()
		
		// title
		console.log(chalk.underline(chalk.bold("Create a Pokemon")))
	

		// steps
		console.log("Basic info... ✅")
		console.log("Attacks... □")
		console.log("Confirm Pokemon... □")
		

		console.log("\n\n")

		console.log(chalk.underline("Attack 1:\n"))
		// ask user for attack1 (we will repeat this process 4 times with different variables)
		// this will store the array for attack1
		let attack1 = []

		// name
		console.log(chalk.bold("What is the name of the attack?"))
		let name1 = prompt()

		// damage
		console.log(chalk.bold("\nHow much damage does the attack do? (use a negative value for heal)"))
		let damage1 = prompt()

		// check if damage is a number
		while (!parseInt(damage1)) {
			invalid()
			console.log(chalk.bold("\nHow much damage does the attack do? (use a negative value for heal)"))
			damage1 = prompt()
		}

		damage1 = parseInt(damage1)

		// energy
		console.log(chalk.bold(`\nHow much energy does the attack use? (Make sure this is no larger than ${energy}!)`))
		let energy1 = prompt()

		// make sure energy is a number and isnt higher than max energy
		while (!parseInt(energy1) || energy1 > pokemon.energy) {
			invalid()
			console.log(chalk.bold(`\nHow much energy does the attack use? (Make sure this is no larger than ${energy}!)`))
			energy1 = prompt()
		}

		energy1 = parseInt(energy1)

		// is attack random
		console.log(chalk.bold("\nDoes the attack only hit 50% of the time? (y/n)"))
		let random1 = prompt()

		while (random1 != "y" && random1 != "n") {
			invalid()
			console.log(chalk.bold("\nDoes the attack only hit 50% of the time? (y/n)"))
			random1 = prompt()
		}

		// set random varible
		if (random1 == "y")
		{
			random1 = true
		} else {
			random1 = false
		}

		// attack description
		console.log(chalk.bold("\nEnter a description for the attack"))
		let description1 = prompt()

		// set the array
		attack1 = [damage1, energy1, random1, description1]

		// clear console again for cleanliness
		console.clear()

		// title
		console.log(chalk.underline(chalk.bold("Create a Pokemon")))

		// steps
		console.log("Basic info... ✅")
		console.log("Attacks... □")
		console.log("Confirm Pokemon... □")
		

		console.log("\n\n")
		
		console.log(chalk.underline("Attack 2:\n"))
		
		let attack2 = []
		console.log(chalk.bold("What is the name of the attack?"))
		let name2 = prompt()

		console.log(chalk.bold("\nHow much damage does the attack do? (use a negative value for heal)"))
		let damage2 = prompt()

		while (!parseInt(damage2)) {
			invalid()
			console.log(chalk.bold("\nHow much damage does the attack do? (use a negative value for heal)"))
			damage2 = prompt()
		}

		damage2 = parseInt(damage2)

		console.log(chalk.bold(`\nHow much energy does the attack use? (Make sure this is no larger than ${energy}!)`))
		let energy2 = prompt()

		while (!parseInt(energy2) || energy2 > pokemon.energy) {
			invalid()
			console.log(chalk.bold(`\nHow much energy does the attack use? (Make sure this is no larger than ${energy}!)`))
			energy2 = prompt()
		}

		energy2 = parseInt(energy2)

		console.log(chalk.bold("\nDoes the attack only hit 50% of the time? (y/n)"))
		let random2 = prompt()

		while (random2 != "y" && random2 != "n") {
			invalid()
			console.log(chalk.bold("\nDoes the attack only hit 50% of the time? (y/n)"))
			random2 = prompt()
		}

		if (random2 == "y")
		{
			random2 = true
		} else {
			random2 = false
		}

		console.log(chalk.bold("\nEnter a description for the attack"))
		let description2 = prompt()

		attack2 = [damage2, energy2, random2, description2]

		// clear console again for cleanliness
		console.clear()

		// title
		console.log(chalk.underline(chalk.bold("Create a Pokemon")))
	
		
		
		// steps
		console.log("Basic info... ✅")
		console.log("Attacks... □")
		console.log("Confirm Pokemon... □")
		

		console.log("\n\n")

		// attack 3
		console.log(chalk.underline("Attack 3:\n"))
		
		let attack3 = []
		console.log(chalk.bold("What is the name of the attack?"))
		let name3 = prompt()

		console.log(chalk.bold("\nHow much damage does the attack do? (use a negative value for heal)"))
		let damage3 = prompt()

		while (!parseInt(damage3)) {
			invalid()
			console.log(chalk.bold("\nHow much damage does the attack do? (use a negative value for heal)"))
			damage3 = prompt()
		}

		damage3 = parseInt(damage3)

		console.log(chalk.bold(`\nHow much energy does the attack use? (Make sure this is no larger than ${energy}!)`))
		let energy3 = prompt()

		while (!parseInt(energy3) || energy3 > pokemon.energy) {
			invalid()
			console.log(chalk.bold(`\nHow much energy does the attack use? (Make sure this is no larger than ${energy}!)`))
			energy3 = prompt()
		}

		energy3 = parseInt(energy3)

		console.log(chalk.bold("\nDoes the attack only hit 50% of the time? (y/n)"))
		let random3 = prompt()

		while (random3 != "y" && random3 != "n") {
			invalid()
			console.log(chalk.bold("\nDoes the attack only hit 50% of the time? (y/n)"))
			random3 = prompt()
		}

		if (random3 == "y")
		{
			random3 = true
		} else {
			random3 = false
		}

		console.log(chalk.bold("\nEnter a description for the attack"))
		let description3 = prompt()

		attack3 = [damage3, energy3, random3, description3]

		// clear console again for cleanliness
		console.clear()

		// title
		console.log(chalk.underline(chalk.bold("Create a Pokemon")))
	
		// steps
		console.log("Basic info... ✅")
		console.log("Attacks... □")
		console.log("Confirm Pokemon... □")
		

		console.log("\n\n")
		
		console.log(chalk.underline("Attack 4:\n"))
		
		let attack4 = []
		console.log(chalk.bold("What is the name of the attack?"))
		let name4 = prompt()

		console.log(chalk.bold("\nHow much damage does the attack do? (use a negative value for heal)"))
		let damage4 = prompt()

		while (!parseInt(damage4)) {
			invalid()
			console.log(chalk.bold("\nHow much damage does the attack do? (use a negative value for heal)"))
			damage4 = prompt()
		}

		damage4 = parseInt(damage4)

		console.log(chalk.bold(`\nHow much energy does the attack use? (Make sure this is no larger than ${energy}!)`))
		let energy4 = prompt()

		while (!parseInt(energy4) || energy4 > pokemon.energy) {
			invalid()
			console.log(chalk.bold(`\nHow much energy does the attack use? (Make sure this is no larger than ${energy}!)`))
			energy4 = prompt()
		}

		energy4 = parseInt(energy4)

		console.log(chalk.bold("\nDoes the attack only hit 50% of the time? (y/n)"))
		let random4 = prompt()

		while (random4 != "y" && random4 != "n") {
			invalid()
			console.log(chalk.bold("\nDoes the attack only hit 50% of the time? (y/n)"))
			random4 = prompt()
		}

		if (random4 == "y")
		{
			random4 = true
		} else {
			random4 = false
		}

		console.log(chalk.bold("\nEnter a description for the attack"))
		let description4 = prompt()

		attack4 = [damage4, energy4, random4, description4]

		pokemon.moves = {}

		pokemon.moves[name1] = attack1
		pokemon.moves[name2] = attack2
		pokemon.moves[name3] = attack3
		pokemon.moves[name4] = attack4

		// get the lowest amount of energy needed to make a move
		pokemon.minEnergy = attack1[1]

		if (attack2[1] < pokemon.minEnergy) {
			pokemon.minEnergy = attack2[1]
		}

		if (attack3[1] < pokemon.minEnergy) {
			pokemon.minEnergy = attack3[1]
		} 

		if (attack4[1] < pokemon.minEnergy) {
			pokemon.minEnergy = attack4[1]
		} 

		// ----- Confirm Pokemon -----
		console.clear()

		// title
		console.log(chalk.underline(chalk.bold("Create a Pokemon")))
	
		
		// steps
		console.log("Basic info... ✅")
		console.log("Attacks... ✅")
		console.log("Confirm Pokemon... □")
		

		console.log("\n\n")

		// display pokemon
		console.log(chalk.bold(pokemon.name + ":"))
		console.log(chalk.underline("Type:") + " " + pokemon.type)
		console.log(chalk.underline("HP:") + " " + pokemon.hp)
		console.log(chalk.underline("Energy:") + " " + pokemon.energy)
		console.log(chalk.underline("Attacks:\n"))
		console.log(chalk.bold(name1+":"))
		console.log("Damage: " + attack1[0])
		console.log("Energy: " + attack1[1])
		console.log("Random: " + attack1[2])
		console.log("Description: " + attack1[3])
		console.log(chalk.bold("\n" + name2+":"))
		console.log("Damage: " + attack2[0])
		console.log("Energy: " + attack2[1])
		console.log("Random: " + attack2[2])
		console.log("Description: " + attack2[3])
		console.log(chalk.bold("\n" + name3+":"))
		console.log("Damage: " + attack3[0])
		console.log("Energy: " + attack3[1])
		console.log("Random: " + attack3[2])
		console.log("Description: " + attack3[3])
		console.log(chalk.bold("\n" + name4+":"))
		console.log("Damage: " + attack4[0])
		console.log("Energy: " + attack4[1])
		console.log("Random: " + attack4[2])
		console.log("Description: " + attack4[3])

		console.log("\n\n")

		console.log(chalk.bgGreen(chalk.bold("Ready to save to pokemon.json? To preview object type \"preview\" (y/n)")))
		let save = prompt().toLowerCase()
		
		while (save != "y" && save != "n") {
			if (save == "preview") {
				console.log(pokemon)
			} else {
				invalid()
			}
			
			console.log(chalk.bgGreen(chalk.bold("\nReady to save to pokemon.json? To preview object type \"preview\" (y/n)")))
			save = prompt().toLowerCase()
		}

		if (save == "y") {
			console.clear()

			// title
			console.log(chalk.underline(chalk.bold("Create a Pokemon")))
		
			
			
			// steps
			console.log("Basic info... ✅")
			console.log("Attacks... ✅")
			console.log("Confirm Pokemon... ✅")
			
	
			console.log("\n\n")
			
			let spinner = new Spinner("Saving... %s")
			spinner.setSpinnerString('|/-\\');
			spinner.start();
			allPokemon[pokemon.name.toLowerCase()] = pokemon
			fs.writeFile('./src/data/pokemon.json', JSON.stringify(allPokemon, null, "\t"), (err) => {
				if (err) { return console.error(err) }
				spinner.setSpinnerString("✅")
				spinner.stop()

				// wait 2 seconds cause it looks nicer lol
				setTimeout(() => {
					console.clear()

					// title
					console.log(chalk.underline(chalk.bold("Create a Pokemon")))
				
					
			
					// steps
					console.log("Basic info... ✅")
					console.log("Attacks... ✅")
					console.log("Confirm Pokemon... ✅")
			
					console.log("\n\n")
					console.log("Done! ✅\n\n")
					prompt("Press enter to exit...")
				}, 2000)
				
			})
		}

		console.log(chalk.bgWhite(chalk.black(chalk.underline("\n Thanks for using PokemonMaker! "))))
	});
}

// edit existing pokemon
else if (action == "2") {
	console.clear()
	// get the jaon data
	let rawdata = fs.readFile('./src/data/pokemon.json', async (err, data) => {
	    if (err) throw err;

		// convert to js object
	    let allPokemon = JSON.parse(data);

		// ask which pokemon user wants
		inquirer.prompt([
			{
				type: 'rawlist',
				name: 'pokemon',
				message: 'Which pokemon would you like to edit?',
				choices: Object.keys(allPokemon)
			}
		])
		// this runs after user makes selection and passes an object with responses
		.then((answers) => {
			// store the pokemon we are editing in object
			let pokemon = allPokemon[answers.pokemon]

			// this function will display pokemon stats, there is one log per line to make this somewhat understandable
			function showStats() {
				console.log(chalk.bold(chalk.underline(pokemon.name)))
				console.log(chalk.bold("Type: ") + pokemon.type)
				console.log(chalk.bold("HP: ") + pokemon.hp)
				console.log(chalk.bold("Energy: ") + pokemon.energy)
				console.log("\n")
				// attacks
				console.log(chalk.bold("Attacks"))
				console.log("\u0009" + Object.keys(pokemon.moves)[0] + ":") // U+0009 Unicode Character 'CHARACTER TABULATION'
				console.log(chalk.bold("\u0009\u0009Damage: ") + pokemon.moves[Object.keys(pokemon.moves)[0]][0])
				console.log(chalk.bold("\u0009\u0009Energy: ") + pokemon.moves[Object.keys(pokemon.moves)[0]][1])
				console.log(chalk.bold("\u0009\u0009Random: ") + pokemon.moves[Object.keys(pokemon.moves)[0]][2])
				console.log(chalk.bold("\u0009\u0009Description: ") + pokemon.moves[Object.keys(pokemon.moves)[0]][3])
				console.log("\n")

				console.log("\u0009" + Object.keys(pokemon.moves)[1] + ":") // U+0009 Unicode Character 'CHARACTER TABULATION'
				console.log(chalk.bold("\u0009\u0009Damage: ") + pokemon.moves[Object.keys(pokemon.moves)[1]][0])
				console.log(chalk.bold("\u0009\u0009Energy: ") + pokemon.moves[Object.keys(pokemon.moves)[1]][1])
				console.log(chalk.bold("\u0009\u0009Random: ") + pokemon.moves[Object.keys(pokemon.moves)[1]][2])
				console.log(chalk.bold("\u0009\u0009Description: ") + pokemon.moves[Object.keys(pokemon.moves)[1]][3])
				console.log("\n")
				
				console.log("\u0009" + Object.keys(pokemon.moves)[2] + ":") // U+0009 Unicode Character 'CHARACTER TABULATION'
				console.log(chalk.bold("\u0009\u0009Damage: ") + pokemon.moves[Object.keys(pokemon.moves)[2]][0])
				console.log(chalk.bold("\u0009\u0009Energy: ") + pokemon.moves[Object.keys(pokemon.moves)[2]][1])
				console.log(chalk.bold("\u0009\u0009Random: ") + pokemon.moves[Object.keys(pokemon.moves)[2]][2])
				console.log(chalk.bold("\u0009\u0009Description: ") + pokemon.moves[Object.keys(pokemon.moves)[2]][3])
				console.log("\n")

				console.log("\u0009" + Object.keys(pokemon.moves)[3] + ":") // U+0009 Unicode Character 'CHARACTER TABULATION'
				console.log(chalk.bold("\u0009\u0009Damage: ") + pokemon.moves[Object.keys(pokemon.moves)[3]][0])
				console.log(chalk.bold("\u0009\u0009Energy: ") + pokemon.moves[Object.keys(pokemon.moves)[3]][1])
				console.log(chalk.bold("\u0009\u0009Random: ") + pokemon.moves[Object.keys(pokemon.moves)[3]][2])
				console.log(chalk.bold("\u0009\u0009Description: ") + pokemon.moves[Object.keys(pokemon.moves)[3]][3])
				console.log("\n\n")
			}

			function handleEdit() {
				// clear console and add stats
				console.clear()
				showStats()
				// ask user for what they want to edit
				inquirer.prompt([
				{
					type: 'rawlist',
					name: 'editType',
					message: 'Which pokemon would you like to edit?',
					choices: ["hp", "energy", "moves", "quit"]
				}])
				.then(answers => {
					// handle each edit
					if (answers.editType == "hp") {
						console.clear()
						inquirer.prompt([
							{
								type: "input",
								name: "hp",
								message: "What should " + pokemon.name + "'s new hp value be?",
								validate(input) {
									if(/^[0-9]+$/g.test(input)) { // regex test for digits
										return true
									}

									throw Error('Please provide a valid number');
								}
							}
						])
						.then(answers => {
							allPokemon[pokemon.name.toLowerCase()].hp = parseInt(answers.hp)
							console.log(pokemon.name + "'s hp set to " + answers.hp)
							prompt("press enter to continure...")
							handleEdit()
						})
					}

					else if (answers.editType == "energy") {
						// find highest energy attack
						let highestEnergy = pokemon.moves[Object.keys(pokemon.moves)[0]][1]

						if (pokemon.moves[Object.keys(pokemon.moves)[1]][1] > highestEnergy) {
							highestEnergy = pokemon.moves[Object.keys(pokemon.moves)[1]][1]
						}

						if (pokemon.moves[Object.keys(pokemon.moves)[2]][1] > highestEnergy) {
							highestEnergy = pokemon.moves[Object.keys(pokemon.moves)[2]][1]
						}

						if (pokemon.moves[Object.keys(pokemon.moves)[3]][1] > highestEnergy) {
							highestEnergy = pokemon.moves[Object.keys(pokemon.moves)[3]][1]
						}

						
						console.clear()
						inquirer.prompt([
							{
								type: "input",
								name: "energy",
								message: "What should " + pokemon.name + "'s new energy value be? It must be no lower than " + highestEnergy,
								validate(input) {
									if(/^[0-9]+$/g.test(input)) { // regex test for digits
										if (!parseInt(input) < highestEnergy)
										{
											return true
										}
									}

									throw Error('Please provide a valid number');
								}
							}
						])
						.then(answers => {
							allPokemon[pokemon.name.toLowerCase()].energy = parseInt(answers.energy)
							console.log(pokemon.name + "'s energy set to " + answers.energy)
							prompt("press enter to continure...")
							handleEdit()
						})
					}
				})
			}
			
			handleEdit()
		})
	})
}