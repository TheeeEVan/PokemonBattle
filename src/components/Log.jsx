import React from 'react';
const { forwardRef, useRef, useImperativeHandle } = React;
import AutoScroll from '@brianmcallister/react-auto-scroll';

import styles from './css/Log.module.css'

function Log (props) {
	return(
		<div className={styles.logContainer}>
			<div className={`${styles.log} mono`}>
				<AutoScroll height={470}>
					{
						props.text.map((line) => 
							<span key={props.text.indexOf(line)}>{line}<br /><hr /></span>
					)}
				</AutoScroll>
			</div>
		</div>
	)
}

export default Log
