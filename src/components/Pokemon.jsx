import React from 'react'
// this is the package used to call to the pokiapi for sprites
import axios from 'axios'
import styles from './css/Pokemon.module.css'

class Pokemon extends React.Component {
	constructor(props)
	{
		super(props)
		
		this.state = {
			pokemon: props.pokemon,
			back: props.back ? 'back/' : '',
			styles: {
				hoverInfo: {display: "none"}
			},
			id: 0
		}
	}

	componentDidMount()
	{
		axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemon.name.toLowerCase()}`)
		.then(response => {
			this.setState({id: response.data.id})
		})
	}
	
	render()
	{	
		return (
			<div className={styles.pokemon}
				onMouseEnter={() => {
							this.setState({
								styles: {
									hoverInfo: {display: "block"}
								}
							})
					}}

					onMouseLeave={() => {
							this.setState({
								styles: {
									hoverInfo: {display: "none"}
								}
							})
					}}>
				<div className={styles.pokemonImage}>
					<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.state.back}${this.state.id}.png`} width="150px"/>
				</div>
				<div className={`${styles.infoContainer} mono`}>
					<div className={this.state.pokemon.hp > this.state.pokemon.maxhp / 5 ? `${styles.healthBar} ${styles.normal}` : `${styles.healthBar} ${styles.critical}`} style={{"--health": (this.state.pokemon.hp / this.state.pokemon.maxhp * 100) + "%"}}></div>
					<div className={styles.energyBar} style={{"--energy": (this.state.pokemon.energy / this.state.pokemon.maxEnergy * 100) + "%"}}></div>
					<span className={styles.name}>{this.state.pokemon.name}</span>
				</div>
				<div className={`${styles.hoverCard} mono`} style={this.state.styles.hoverInfo}> {/* this element is hidden until user hovers over image */}
					<p>Health: {this.state.pokemon.hp}/{this.state.pokemon.maxhp}</p>
					<p>Energy: {this.state.pokemon.energy}/{this.state.pokemon.maxEnergy}</p>
					<span className={styles.smallText}>Click for more info</span>
				</div>
			</div>
		)	
	}
}

export default Pokemon