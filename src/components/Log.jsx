import React from 'react';
const { forwardRef, useRef, useImperativeHandle } = React;
import AutoScroll from '@brianmcallister/react-auto-scroll';

import styles from './css/Log.module.css'

function Log (props) {
	return(
		<div className={styles.logContainer}>
			<div className={`${styles.log} mono`}>
				<AutoScroll height={360}>
					{
						props.text.map((line) => 
							<span key={Math.floor(Math.random() * 10000)}>{line}<br /><hr style={{height:"2px", border:"none", color:"#666", backgroundColor:"#666"}}/></span>
					)}
				</AutoScroll>
			</div>
		</div>
	)
}

export default Log
