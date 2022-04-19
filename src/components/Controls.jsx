import React from 'react';
import styles from './css/Controls.module.css';

//import styles from './css/Controls.module.css'

function Controls(props) {
	const buttons = {
		button1: { 
			name: Object.keys(props.pokemon.moves)[0], 
			color: '#d6d6d6' 
		},
		button2: {
			name: Object.keys(props.pokemon.moves)[1], 
			color: '#d6d6d6'
		},
		button3: {
			name: Object.keys(props.pokemon.moves)[2], 
			color: '#d6d6d6'
		},
		button4: {
			name: Object.keys(props.pokemon.moves)[3],
			color: '#d6d6d6'
		},
		button5: {
			name: 'Nothing',
			color: '#70fdff'
		},
		button6: {
			name: 'Save Log',
			color: '#8fff70'
		},
		button7: {
			name: 'Restart',
			color: '#ffff70'
		},
		button8: {
			name: 'Quit',
			color: '#ff7a70'
		}
	};

	return (
		<div className={styles.container}>
			<button id="button1" style={{ '--button-bg': buttons.button1.color }} onClick={() => props.button1()}>{buttons.button1.name}</button>
			<button id="button2" style={{ '--button-bg': buttons.button2.color }} onClick={() => props.button2()}>{buttons.button2.name}</button>
			<button id="button3" style={{ '--button-bg': buttons.button3.color }} onClick={() => props.button3()}>{buttons.button3.name}</button>
			<button id="button4" style={{ '--button-bg': buttons.button4.color }} onClick={() => props.button4()}>{buttons.button4.name}</button>
			<button id="button5" style={{ '--button-bg': buttons.button5.color }} onClick={() => props.button5()}>{buttons.button5.name}</button>
			<button id="button6" style={{ '--button-bg': buttons.button6.color }} onClick={() => props.button6()}>{buttons.button6.name}</button>
			<button id="button7" style={{ '--button-bg': buttons.button7.color }} onClick={() => location.reload()}>{buttons.button7.name}</button>
			<button id="button8" style={{ '--button-bg': buttons.button8.color }} onClick={() => window.close()}>{buttons.button8.name}</button>
			<div className={styles.disabled} style={{display: props.enabled ? "none" : "block"}}></div>
		</div>
	);
}

export default Controls;
