import React from 'react';
import styles from './App.module.css';

// import the components we need
import Game from './components/Game.jsx'
import Log from './components/Log.jsx'
import Controls from './components/Controls.jsx'

// create a class that is a child of the React.Coponent class
class App extends React.Component {
	// 
	constructor(props)
	{
		super(props)
		this.state = {
			log: [<strong>Welcome to Pokemon Battle!</strong>, <strong>This project was made by Evan Anderson.</strong>]
		}
	}

	updateLog(data)
	{
		this.setState(prevState => {
			log: prevState.log.concat([data])
		})
	}
	
	render()
	{	
		return(
			<div>
				<h1 onClick={() => {
				console.log('test');
				this.updateLog("Hello");
				}}>Pokemon Game</h1>
				<main className={styles.main}>
					<div className={`${styles.container}`}>
						<Game />
					</div>
					<div className={styles.container}>
						<Log text={this.state.log} />
					</div>
					<div className={`${styles.container} ${styles.controls}`}>
						<Controls />
					</div>
				</main>
			</div>
		)
	}
}

export default App;