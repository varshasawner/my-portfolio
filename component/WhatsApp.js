import React, {useState} from 'react';
import Styles from '../styles/chat.module.css';

export default function ChatWindow(props) {
	const [msg, setMsg] = useState([]);
	const [msg_1, setMsg_1] = useState("");
	const [msg_2, setMsg_2] = useState("");


	function getTextMsg(e){
		setMsg_1(e.target.value);
	}

	function getTextMsg2(e){
		setMsg_2(e.target.value);
	}

	function getMessage(){
		msg.push({name: 'person1', msg : msg_1, time : new Date()});
		setMsg(msg);
		setMsg_1("");
	}

	function getMessage2(){
		const chatObject = {name: 'person2', msg : msg_2, time : new Date()}
		setMsg([...msg, chatObject]);
		setMsg_2("");
	}

	function deleteMsg(e){
		const index = e.target.getAttribute("btnkey");
		msg.splice(index,1);
			console.log(msg);
			setMsg([...msg]);

	}

	return (
			<div className={Styles.container_whatsApp}>
				<div className={Styles.text_whatsApp}>
					{msg.map(function(item, index){
						return (
							<div key={index} className={Styles.bubblecontainer}>
								<p
									className={item.name === 'person1' 
										? Styles.bubble 
										: Styles.bubbleright}>
									{item.msg}
									<span>
										<button 
											onClick={deleteMsg} 
											btnkey={index}>
											delete
										</button>
									</span>
								</p>
								<p 
									className={Styles.bubbletime}>
									{item.time.toString()}
								</p>
							</div>
						)
					})}
				</div>
				<input
					type="text"
					className={Styles.textMsgBox_1}
					onChange={getTextMsg}
					placeholder="Person 1"
					value={msg_1}>
				</input>
				<button
					onClick={getMessage}
					className={Styles.sendBtn}>
					Send
				</button>
				<input
					type="text"
					className={Styles.textMsgBox_2}
					onChange={getTextMsg2}
					placeholder="Person 2"
					value={msg_2}>
				</input>
				<button
					onClick={getMessage2}
					className={Styles.sendBtn}>
					Send
				</button>
			</div>
		)
}