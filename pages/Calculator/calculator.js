import React, { useState } from 'react';
import Keypad from '../../component/Keypad';
import Styles from '../../styles/calculator.module.css';

export default function Calculator(props){
	const [value, setValue] = useState("");
	let btn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "+", "-", "*", "/"];

	function getValue(a){
		setValue(value.concat(a));
	}

	function result(){
		setValue(eval(value).toString());
	}

		function clear(){
		setValue("");
	}
	return (
			<div className={ Styles.container}>
				<h1>Calculator</h1>
				<div className={Styles.calBox}>
					<input type="text" readOnly="readOnly" value={value} className={Styles.screen}/>
					<div className={Styles.btnBox}>
						{btn.map(function(btns){
							return <Keypad key={btns} value={btns} fun={getValue}></Keypad>
						})}
						<button onClick={clear} className={Styles.btn}>AC</button>
						<button onClick={result} className={Styles.btn}>=</button>
					</div>
					
				</div>
			</div>
		)
}