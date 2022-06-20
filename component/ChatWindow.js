import React, {useState} from 'react';
import Styles from '../styles/chat.module.css';

export default function ChatWindow(props) {
	const [msg, setMsg] = useState([]);
	const [msg_1, setMsg_1] = useState("");

	function getTextMsg(e){
		setMsg_1(e.target.value);
	}

	function getMessage(){
		msg.push({msg : msg_1, time : new Date()});
		console.log("Get message called", msg.length);
		setMsg(msg);
		setMsg_1("");

		window.scrollTo(0, document.body.scrollHeights);

	}

	return (
			<div className={Styles.container}>
				<div className={Styles.text}>
					{msg.map(function(item, index){
						return (
											<div key={index} className={Styles.bubble}>
											{item.msg + "\n" + item.time}
											</div>
										)
					})}

				</div>
				<input
					type="text"
					className={Styles.textMsgBox}
					onChange={getTextMsg}
					value={msg_1}>
				</input>
				<button
					onClick={getMessage}
					className={Styles.sendBtn}>
					Send
				</button>
			</div>
		)
}