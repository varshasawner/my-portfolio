import Styles from '../styles/calculator.module.css';

export default function Keypad(props){

	function getBtn(){
		props.fun(props.value);
	}

	return (
				<button onClick={getBtn} className={Styles.btn}>{props.value}</button>
		)
}