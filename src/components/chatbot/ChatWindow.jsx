import logo from '../../assets/images/logo.png'
import star from  '../../assets/images/star-img.png'
import ChatMessages from './ChatMessages'
import warningIcon from '../../assets/images/warning-icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight, faVolume, faX } from '@fortawesome/free-solid-svg-icons'
import ChatInput from './ChatInput'
import chatbotData from '../../data/chatbotData'
import { useState, useRef } from 'react'
import './chatbot.css'

const ChatbotWindow = () => {
    const messageId = useRef(3)
    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: "user",
            text: "Hey Bee-Bot! I just got my first paycheck."
        },
        {
            id: 2,
            sender: "bot",
            text: "Bzz! 🐝 That's exciting! Let's make a plan for your money."
        }
    ])

    const [selectedCategory, setSelectedCategory] = useState(null)
    const categories = [...new Set(chatbotData.map(item => item.category))]
    function handleSendMessage(text) {
    console.log("User sent:", text)

    const matchedQuestion = chatbotData.find(
        item => item.question.trim().toLowerCase() === text.trim().toLowerCase()
    )

    const newMessages = [
        {
            id: messageId.current++,
            sender: "user",
            text: text
        }
    ]

    if (matchedQuestion) {
        newMessages.push({
            id: messageId.current++,
            sender: "bot",
            text: matchedQuestion.answer
        })
    } else {
        newMessages.push({
            id: messageId.current++,
            sender: "bot",
            text: "Bzz! 🐝 I don't recognize that question yet. Try one of the suggested questions."
        })
    }

    setMessages(prevMessages => [
        ...prevMessages,
        ...newMessages
    ])
}
function getCategoryQuestions() {
    return chatbotData.filter(
        item => item.category === selectedCategory
    )
}
    return (
        <div className="chatbot-window">
            <div className="chatbot-header">
                <div className='chatbot-header-right'>
                    <div className='chatbot-header-logo'>
                        <img src={logo} alt="Logo image" />
                        <span className="mini-status-dot"></span>
                    </div>
                    <div className='chatbot-info'>
                        <span>Bee-Bot FinLit AI Coach <img src={star} alt="" /></span>
                        <p><span>NextGen Student Assistant</span> . 100% Free & Educational</p>
                    </div>
                </div>
                <div className='chatbot-header-actions'>
                    <FontAwesomeIcon icon={faRotateRight} />
                    <FontAwesomeIcon icon={faVolume} />
                    <FontAwesomeIcon icon={faX} />
                </div>
            </div>
            <div className='warning-message'>
                <img src={warningIcon}/>
                <p>
                    <span>Student Notice:</span> Bee-Bot provides financial literacy simulations & educational models only.Not legal, tax or investment advice.
                </p>
            </div>
            <div className="chatbot-messages">
                {messages.map((message) => {
                    return (
                        <ChatMessages
                            key={message.id}
                            sender={message.sender}
                            text={message.text}
                        />
                    )
                })}
            </div>
            <div className="suggested-questions">

    {!selectedCategory ? (
        <>
            <span className="try-label">
                💡 What can I ask?
            </span>

            {categories.map(category => (
                <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                >
                    {category}
                </button>
            ))}
        </>
    ) : (
        <>
            <button
                className="back-button"
                onClick={() => setSelectedCategory(null)}
            >
                ← Categories
            </button>

            <span className="try-label">
                {selectedCategory}
            </span>

            {getCategoryQuestions().map(item => (
                <button
                    key={item.id}
                    onClick={() => {
                        handleSendMessage(item.question)
                        setSelectedCategory(null)
                    }}
                >
                    {item.question}
                </button>
            ))}
        </>
    )}

</div>
<ChatInput onSendMessage={handleSendMessage} />
        </div>
    )
}

export default ChatbotWindow