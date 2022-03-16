import React from 'react';
import './App.css';

// import the components we need
import Pokemon from './components/Pokemon'

// create a class that is a child of the React.Coponent class
class App extends React.Component {
	// 
	constructor(props)
	{
		super(props)
		this.state = {stage: "pregame"}
	}
	
	render()
	{
		return(
			<main>
				<Pokemon pokemon="pikachu" side="back" />
			</main>
		)
	}
}

export default App;