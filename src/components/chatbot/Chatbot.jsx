import logo from '../../assets/images/logo.png'
import './chatbot.css'
import ChatWindow from './ChatWindow'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  function toggle(){
    setIsOpen(
      isOpen => !isOpen
    )
    console.log("Clicked")
  }
  return (
    <div className='chatbot-container'>
        {isOpen && <ChatWindow/>}
        <button className={`chatbot-button ${isOpen ? 'open' : ''}`}  onClick={toggle}>
          {isOpen ? (<FontAwesomeIcon icon={faX} />) : (
            <>
              <img src={logo} alt="" className="chatbot-logo" /> <span>Ask BudgetBee</span>
            </>)}

    <span className="status-dot"></span>
</button>
    </div>
  )
}

export default Chatbot
