// lots of importing
// import react and styles
import React from 'react';
import styles from './App.module.css';

// import the components we need
import Game from './components/Game.jsx';
import Log from './components/Log.jsx';
import Controls from './components/Controls.jsx';

// import game data
import allPokemon from './data/pokemon.json';
import strengths from './data/strengths.json';
import config from './data/config.json'

// import modules
import { saveAs } from 'file-saver'
import * as ReactDOMServer from 'react-dom/server';

// create a class that is a child of the React.Coponent class
class App extends React.Component {
	//
	constructor(props) {
		super(props);
		this.state = {
			log: [
				<strong>Welcome to Pokemon Battle!</strong>,
				<strong>This project was made by Evan Anderson.</strong>
			],
			pokemon1: allPokemon.pikachu,
			pokemon2: allPokemon.bulbasaur,
			controlsEnabled: true,
			attack: 0
		};

		// this makes setState work in the button functions
		this.button1 = this.button1.bind(this)
		this.button2 = this.button2.bind(this)
		this.button3 = this.button3.bind(this)
		this.button4 = this.button4.bind(this)
		this.button5 = this.button5.bind(this)
		this.button6 = this.button6.bind(this)
	}

	/* ---------------BUTTON FUNCTIONS--------------- */
	/* attack 1 */
	button1() {
		this.setState({controlsEnabled: false, attack: 1})
	}

	/* attack 2 */
	button2() {
		this.setState({controlsEnabled: false, attack: 2})
	}

	/* attack 3 */
	button3() {
		this.setState({controlsEnabled: false, attack: 3})
	}

	/* attack 4 */
	button4() {
		this.setState({controlsEnabled: false, attack: 4})
	}

	/* do nothing */
	button5() {
		this.setState({controlsEnabled: false, attack: 5})
	}

	/* save log */
	button6() {
		let d = new Date()
		// fancy way of adding date
		let data = "This log was generated on: " + d.toLocaleDateString() + " at " + d.toLocaleTimeString()

		this.state.log.forEach(text => {
			// in the case that this returns a react element (specifically bold part of log) it will convert to string, strings are treated normally through this function
			data = data + "\n" + ReactDOMServer.renderToStaticMarkup(text)
		})
		// this was taken from the file-saver docs (https://www.npmjs.com/package/file-saver)
		let blob = new Blob([data], {type: "text/plain;charset=utf-8"});
		saveAs(blob, "hello world.txt");
	}

	/* ---------------GAME HANDLING--------------- */

	// waits 2 seconds, yes thats all it does, used for making delays between turns and log messages for a smoother experience
	delay() {
		return new Promise(resolve => {
			setTimeout(resolve, 2000)
		})
	}

	// update the log
	updateLog(text) {
		this.setState({
			log: [...this.state.log, text]
		});
	}

	// returns promise when user selects move, promise is empty
	getUserMove() {
		// by using a promise we can wait for user to select a move
		return new Promise(resolve => {
			// every 500ms check if move has been set
			let checker = setInterval(() => {
				if (this.state.attack != 0)
				{
					// this checks whether pokemon has enough energy to perform that move
					if (this.state.pokemon1.energy >= this.state.pokemon1.moves[Object.keys(this.state.pokemon1.moves)[this.state.attack - 1]][1])
					{
						clearInterval(checker)
						resolve()
					} else {
						this.updateLog("You don't have enough energy for that move!")
						this.setState({controlsEnabled: true, attack: 0})
					}
				}
			}, 500)
		})
	}

	// generate a random move that the computer will perform
	getComputerMove() {
		
	}

	// takes the attacker defender and attack to calculate new stats after attack
	calculateDamage(attacker, defender, attackId) {
		// promise cause async stuff
		return new Promise(resolve => {
			/*
			Attack array reference:

			[damage: int, energy: int, random: bool, description: string]
			*/
			// store attack data
			let attack = attacker.moves[Object.keys(attacker.moves)[this.state.attack - 1]]

			// remove energy
			attacker.energy -= attack[1]

			// if attack is random first check if it hits
			if (attack[2]) {
				// generate number between 0 and 0.99... if its > than 0.5 then attack failed
				if (Math.random() >= 0.5)
				{
					this.updateLog(attacker.name + " missed.")
					return resolve()
				}
			}

			// check if attack heals or damages
			// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
			if (Math.sign(attack[0]) == 1) // this means damage
			{
				// get the strength multiplier for this attack
				let multiplier = strengths[attacker.type][defender.type]

				// send to log message about strength
				switch (multiplier) {
					case 0.25:
						this.updateLog(`${defender.name} is very strong against ${attacker.name}! (0.25x damage)`)
						break
					case 0.5:
						this.updateLog(`${defender.name} is strong against ${attacker.name}! (0.5x damage)`)
						break
					case 2:
						this.updateLog(`${defender.name} is very weak against ${attacker.name} (2x damage)`)
						break
				}

				// simple math to do the damage
				defender.hp -= attack[0] * multiplier
				
				return resolve()
				
			} else if (Math.sign(attack[0]) == -1) // this is heal
			{
				attacker.hp -= attack[0] // subtract the damage because its negative

				// ensure we didnt heal over max hp, if we did, set hp to max hp
				if (attacker.hp > attacker.maxhp) {
					attacker.hp = attacker.maxhp
				}

				return resolve()
			} else { // if we get here something is wrong so just do nothing and throw warning in console
				console.warn(`${attacker.name} seems to be broken so you should fix that :)`)
			}
		})
	}

	// updates data on new turns
	newTurn() {
		return new Promise(resolve => {
			// we just need to add energy to both pokemon
			
			return resolve()
		})
	}

	gameover() {
		// figure out which pokemon is at 0
		if (this.state.pokemon1.hp < 1) {
			this.updateLog("You Lose!")
		} else {
			this.updateLog("You Win!")
		}

		this.updateLog("If you'd like to play again press the restart button, otherwise press the quit button.")

		// this makes sure that if a user presses one of the attack buttons that the buttons will become availible again
		setInterval(() => {
			this.setState({controlsEnabled: true})
		}, 100)
	}

	// performs all functions necassary for a turn to complete (both players use an attack)
	async turn() {
		this.setState({controlsEnabled: true, attack: 0})
		this.updateLog("Your Turn!")
		// get users move
		await this.getUserMove()
		// check if user selected nothing, update log accordingly
		if (this.state.attack == 5) {
			this.updateLog(this.state.pokemon1.name + " did nothing.")
		} else {
			this.updateLog(this.state.pokemon1.name + " used " + Object.keys(this.state.pokemon1.moves)[this.state.attack - 1] + "!")
			await this.delay()
			await this.calculateDamage(this.state.pokemon1, this.state.pokemon2, this.state.attack)
		}
		await this.delay()
		this.updateLog("Computers Turn...")
		await this.delay()
		this.updateLog("the computer turn isnt done yet lol")

		// check if game is over, if it isn't run newTurn then this function again, otherwise run gameover functions
		if (this.state.pokemon1.hp < 1 || this.state.pokemon2.hp < 1) {
			this.gameover()
		} else {
			await this.newTurn()
			this.turn()
		}
	}

	// this will start the first turn
	componentDidMount() {
		this.turn();
	}
	
	/* ---------------RENDER--------------- */

	render() {
		return (
			<div>
				<h1
					onClick={() => {
						console.log('test');
						this.updateLog('Hello');
					}}
				>
					Pokemon Game
				</h1>
				<main className={styles.main}>
					<div className={`${styles.container}`}>
						<Game
							pokemon1={this.state.pokemon1}
							pokemon2={this.state.pokemon2}
							info={{display: "none"}}
						/>
					</div>
					<div className={styles.container}>
						<Log text={this.state.log} />
					</div>
					<div className={styles.break}></div>
					<div className={`${styles.container} ${styles.controls}`}>
						<Controls
							pokemon={this.state.pokemon1}
							button1={this.button1}
							button2={this.button2}
							button3={this.button3}
							button4={this.button4}
							button5={this.button5}
							button6={this.button6}
							enabled={this.state.controlsEnabled}
						/>
					</div>
				</main>
			</div>
		);
	}
}

export default App;
