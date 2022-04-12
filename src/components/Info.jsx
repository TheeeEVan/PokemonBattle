import React from 'react'
import styles from './css/Info.module.css'

class Info extends React.Component {
	constructor(props)
	{
		super()
		this.state = {
			enabled: props.enabled == true ? {display: 'flex'} : {display: 'none'},
		}
	}
	
	render()
	{
		return (
			<div className={styles.info} style={this.state.enabled}>
				<div className={styles.card}>
					<div>
						<div className={styles.image}>
							<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.pokemonid}.png`} />
						</div>
						<div className={styles.stats}>
							<p><strong>Health: </strong>{this.props.pokemon.hp}/{this.props.pokemon.maxhp}</p>
							<p><strong>Energy: </strong>{this.props.pokemon.energy}/{this.props.pokemon.maxEnergy}</p>
						</div>
					</div>
					<div>
						<div className={styles.basicInfo}>
							<p className={styles.title}>{this.props.pokemon.name}</p>
							<p className={styles.type}>{this.props.pokemon.type.charAt(0).toUpperCase() + this.props.pokemon.type.slice(1)}</p>
							<hr className={styles.line}/>
						</div>
						<div>
							{Object.keys(this.props.pokemon.moves).map(name => {
								return <p><strong>{name}</strong> | {this.props.pokemon.moves[name][3]}</p>
							})}
							<div className={styles.goBack}>
								<span>Click anywhere to go back...</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Info