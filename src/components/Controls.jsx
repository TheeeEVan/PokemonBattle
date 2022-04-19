import React from 'react';
import styles from './css/Controls.module.css';

function Controls(props) {
	const [brightness1, setBrightness1] = React.useState("100%");
	const [brightness2, setBrightness2] = React.useState("100%");
	const [brightness3, setBrightness3] = React.useState("100%");
	const [brightness4, setBrightness4] = React.useState("100%");
	const [brightness5, setBrightness5] = React.useState("100%");
	const [brightness6, setBrightness6] = React.useState("100%");
	const [brightness7, setBrightness7] = React.useState("100%");
	const [brightness8, setBrightness8] = React.useState("100%");

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
			<button id="button1" style={{ '--button-bg': buttons.button1.color, filter: `brightness(${brightness1})` }} onClick={() => props.button1()} onMouseEnter={() => {setBrightness1("80%")}} onMouseLeave={() => {setBrightness1("100%")}}>{buttons.button1.name}</button>
			<button id="button2" style={{ '--button-bg': buttons.button2.color, filter: `brightness(${brightness2})` }} onClick={() => props.button2()} onMouseEnter={() => {setBrightness2("80%")}} onMouseLeave={() => {setBrightness2("100%")}}>{buttons.button2.name}</button>
			<button id="button3" style={{ '--button-bg': buttons.button3.color, filter: `brightness(${brightness3})` }} onClick={() => props.button3()} onMouseEnter={() => {setBrightness3("80%")}} onMouseLeave={() => {setBrightness3("100%")}}>{buttons.button3.name}</button>
			<button id="button4" style={{ '--button-bg': buttons.button4.color, filter: `brightness(${brightness4})` }} onClick={() => props.button4()} onMouseEnter={() => {setBrightness4("80%")}} onMouseLeave={() => {setBrightness4("100%")}}>{buttons.button4.name}</button>
			<button id="button5" style={{ '--button-bg': buttons.button5.color, filter: `brightness(${brightness5})` }} onClick={() => props.button5()} onMouseEnter={() => {setBrightness5("80%")}} onMouseLeave={() => {setBrightness5("100%")}}>{buttons.button5.name}</button>
			<button id="button6" style={{ '--button-bg': buttons.button6.color, filter: `brightness(${brightness6})` }} onClick={() => props.button6()} onMouseEnter={() => {setBrightness6("80%")}} onMouseLeave={() => {setBrightness6("100%")}}>{buttons.button6.name}</button>
			<button id="button7" style={{ '--button-bg': buttons.button7.color, filter: `brightness(${brightness7})` }} onClick={() => location.reload()} onMouseEnter={() => {setBrightness7("80%")}} onMouseLeave={() => {setBrightness7("100%")}}>{buttons.button7.name}</button>
			<button id="button8" style={{ '--button-bg': buttons.button8.color, filter: `brightness(${brightness8})` }} onClick={() => window.close()} onMouseEnter={() => {setBrightness8("80%")}} onMouseLeave={() => {setBrightness8("100%")}}>{buttons.button8.name}</button>
			<div className={styles.disabled} style={{display: props.enabled ? "none" : "block"}}></div>
		</div>
	);
}

export default Controls;
