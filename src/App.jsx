import React from 'react';
import './App.css';

class App extends React.Component {
	constructor(props)
	{
		super(props)
		this.state = {message: "this is my message"}
	}
	
	render()
	{
		return(
			<main><h1>Test</h1></main>
		)
	}	
}

export default App;