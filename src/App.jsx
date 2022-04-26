import React from 'react';
import styles from './App.module.css';

// import the components we need
import Game from './components/Game.jsx';
import Log from './components/Log.jsx';
import Controls from './components/Controls.jsx';

// import game data
import allPokemon from './data/pokemon.json';
import strengths from './data/strengths.json';

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
			pokemon1: allPokemon.charizard,
			pokemon2: allPokemon.bulbasaur,
			controlsEnabled: true
		};

		this.button1 = this.button1.bind(this)
	}

	// update the log
	updateLog(text) {
		this.setState({
			log: [...this.state.log, text]
		});
	}

	/* ---------------BUTTON FUNCTIONS--------------- */
	/* attack 1 */
	button1() {
		console.log('Button 1 pressed');
	}

	/* attack 2 */
	button2() {
		console.log('Button 2 pressed');
	}

	/* attack 3 */
	button3() {
		console.log('Button 3 pressed');
	}

	/* attack 4 */
	button4() {
		console.log('Button 4 pressed');
	}

	/* do nothing */
	button5() {
		console.log('Button 5 pressed');
	}

	/* save log */
	button6() {
		console.log('Button 6 pressed')
	}

	/* ---------------GAME HANDLING--------------- */

	newLogLine(text)
	{
		this.setState(prevState => {
			log: [...prevState.log, text]
		})
	}

	async game()
	{
		this.updateLog("does this work")
	}

	// run game function on load
	componentDidMount() {
		this.game();
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
