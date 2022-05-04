import React from 'react';
const { forwardRef, useRef, useImperativeHandle } = React;
import AutoScroll from '@brianmcallister/react-auto-scroll';
import uniqid from 'uniqid';

import styles from './css/Log.module.css'

function Log (props) {
	return(
		<div className={styles.logContainer}>
			<div className={`${styles.log} mono`}>
				<AutoScroll height={320}>
					{
						props.text.map((line) => 
							<span key={uniqid("logline-",`-${line}`)}>{line}<br /><hr style={{height:"2px", border:"none", color:"#666", backgroundColor:"#666"}}/></span>
							// the strange key makes it almost impossible to have duplicate keys in the array
					)}
				</AutoScroll>
			</div>
		</div>
	)
}

export default Log
