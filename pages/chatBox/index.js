import ChatWindow from '../../component/ChatWindow';
import WhatsApp from '../../component/WhatsApp';
import NewChatBox from '../../component/NewChatBox';
import Styles from '../../styles/chat.module.css';

export default function Index(props) {
	return (
		<div className={Styles.mainWindow}>
			<ChatWindow className={Styles.inputBox}></ChatWindow>
			<WhatsApp></WhatsApp>
			<NewChatBox></NewChatBox>
		</div>
		)
}