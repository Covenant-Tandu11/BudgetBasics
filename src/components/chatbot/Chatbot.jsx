import logo from '../../assets/images/logo.png'
import './chatbot.css'

const Chatbot = () => {
  return (
    <div className='chatbot-container'>
        <button className='chatbot-button'>
            <img src={logo} alt="" className='chatbot-logo'/> 
            <span>Ask BudgetBee</span>
            <span className='status-dot'></span>
        </button>
    </div>
  )
}

export default Chatbot
