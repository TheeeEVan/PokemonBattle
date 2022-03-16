import React from 'react'
// this is the package used to call to the pokiapi for sprites
import axios from 'axios'

class Pokemon extends React.Component {
	constructor(props)
	{
		super(props)

		this.state = {
			pokemonid: 0
		}
	}
	
	render()
	{
		return (
			<div className="pokemon">
				<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.state.pokemonid}.png`} width="150px"/>
			</div>
		)
	}
}

export default Pokemon