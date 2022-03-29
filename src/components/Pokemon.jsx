import React from 'react'
// this is the package used to call to the pokiapi for sprites
import axios from 'axios'
import './css/pokemon.css'

class Pokemon extends React.Component {
	constructor(props)
	{
		super(props)

		this.state = {
			pokemonid: props.pokemonId,
			health: 100,
			back: this.props.back ? "back/" : ""
		}
	}
	
	render()
	{
		return (
			<div className="pokemon">
				<div className="pokemonImage">
					<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.state.back}${this.state.pokemonid}.png`} width="150px"/>
				</div>
				<div className="healthBar normal mono" style={{"--health": this.state.health+"%"}}><span className='healthValue'>50/100</span></div>
			</div>
		)
	}
}

export default Pokemon