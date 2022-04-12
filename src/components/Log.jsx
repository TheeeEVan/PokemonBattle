import React from 'react';
const { forwardRef, useRef, useImperativeHandle } = React;

import styles from './css/Log.module.css'

function Log (props) {
	return(
		<div className={styles.logContainer}>
			<div className={`${styles.log} mono`}>
				{
					props.text.map((line) => 
						<span key={props.text.indexOf(line)}>{line}<br /><hr /></span>
					)}
			</div>
		</div>
	)
}

export default Log
