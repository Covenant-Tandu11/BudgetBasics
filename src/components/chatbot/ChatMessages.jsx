import logo from '../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './chatbot.css'

const ChatMessages = ({ sender, text }) => {

    return (
        <div className={`message-wrapper ${sender}`}>
            {sender === "user" ? (
                <>
                    <div className="message-sender">
                        <span>You</span>
                        <span>•</span>
                        <span>Sophomore</span>
                    </div>

                    <div className="message-row">
                        <div className="message-bubble">
                            <p>{text}</p>
                        </div>

                        <div className="message-icon user-icon">
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="message-sender bot-sender">
                        <span>Bee-Bot</span>
                        <span className="smart-coach">
                            Smart Coach
                        </span>
                    </div>
                    <div className="message-row bot-row">
                        <div className="message-icon bot-icon">
                            <img src={logo} alt="Bee-Bot" />
                        </div>
                        <div className="message-bubble">
                            <p>{text}</p>
                        </div>
                    </div>
                </>
            )}

        </div>
    )
}

export default ChatMessages