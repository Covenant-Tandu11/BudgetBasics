import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperclip,faMicrophone,faArrowRight} from '@fortawesome/free-solid-svg-icons'

const ChatInput = ({ onSendMessage }) => {
    const [input, setInput] = useState('')
    function handleSubmit() {
        if (!input.trim()) return

        onSendMessage(input)
        setInput('')
    }

    return (
        <div className="chat-input-section">
            <div className="chat-input">

                <FontAwesomeIcon
                    icon={faPaperclip}
                    className="attachment-icon"
                />

                <input
                    type="text"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    placeholder="Ask Bee-Bot anything about campus budgeting, rent, or saving..."
                    onKeyDown={(event) => {
                        if (event.key === "Enter") {
                            handleSubmit()
                        }
                    }}
                />

                <button className="mic-button">
                    <FontAwesomeIcon icon={faMicrophone} />
                </button>

                <button
                    className="ask-button"
                    onClick={handleSubmit}
                >
                    Ask
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>

            </div>

            <div className="chatbot-footer">
                <span>
                    Zero financial data sold. Client-side privacy guaranteed.
                </span>

                <span>
                    Bee-Bot v2.4 • Educational Build
                </span>
            </div>
        </div>
    )
}

export default ChatInput