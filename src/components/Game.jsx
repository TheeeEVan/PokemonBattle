import React from 'react'
import Pokemon from './Pokemon'
import Info from './Info'

// we use fetch to get pokemon data so that we can run .json on it to make it an object
import allPokemon from '../data/pokemon.json'

import styles from './css/Game.module.css'

export default class Game extends React.Component {
	constructor(props)
	{
		super(props)
		this.state = {
			player1: props.pokemon1,
			player2: props.pokemon2,
			infoPlayer: allPokemon.axew, // placeholder until user opens info tab
			infoid: null,
			info: {display: "none"}
		}

		this.toggleInfo = this.toggleInfo.bind(this)
		this.pokemonid1 = React.createRef()
		this.pokemonid2 = React.createRef()
	}

	toggleInfo()
	{
		this.setState({info: this.state.info.display == "block" ? {display:"none"} : {display:"block"}})
	}
	
	render()
	{
		let infoStyle = {}
		
		return (
			<div className={styles.container}>
				<div className={styles.playerOne} onClick={() => {
					this.setState({infoPlayer: this.state.player1, infoid: this.pokemonid1.current.state.id})
					this.toggleInfo()
				}}>
					<Pokemon back={true} pokemon={this.state.player1} ref={this.pokemonid1}/>
				</div>
				<div style={Object.assign(infoStyle, this.state.info, {zIndex: 1})} onClick={this.toggleInfo}>
					<Info enabled={true} pokemon={this.state.infoPlayer} pokemonid={this.state.infoid}/>
				</div>
				<div className={styles.playerTwo} style={{zIndex: 0}} onClick={() => {
					this.setState({infoPlayer: this.state.player2, infoid: this.pokemonid2.current.state.id})
					this.toggleInfo()
				}}>
					<Pokemon back={false} pokemon={this.state.player2} ref={this.pokemonid2}/>
				</div>
			</div>
		)
	}
}