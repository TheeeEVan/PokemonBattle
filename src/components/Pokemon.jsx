import React from 'react'
// this is the package used to call to the pokiapi for sprites
import axios from 'axios'
import styles from './css/Pokemon.module.css'

class Pokemon extends React.Component {
	constructor(props)
	{
		super(props)

		this.state = {
			pokemon: {
				pokemonid: props.pokemonId,
				health: 21,
				maxHealth: 100,
				energy: 20,
				maxEnergy: 20,
				back: this.props.back ? "back/" : ""
			}
		}
	}
	
	render()
	{
		return (
			<div className={styles.pokemon}>
				<div className="pokemonImage">
					<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.state.pokemon.back}${this.state.pokemon.pokemonid}.png`} width="150px"/>
				</div>
				<div className={this.state.pokemon.health > this.state.pokemon.maxHealth / 5 ? `${styles.healthBar} ${styles.normal}` : `${styles.healthBar} ${styles.critical}`} style={{"--health": (this.state.pokemon.health / this.state.pokemon.maxHealth * 100) + "%"}}></div>
				<div className={styles.energyBar} style={{"--energy": (this.state.pokemon.energy / this.state.pokemon.maxEnergy * 100) + "%"}}></div>
			</div>
		)
	}
}

export default Pokemon