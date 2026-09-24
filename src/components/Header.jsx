import logo from "../assets/images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import '../styles/header.css'


const Header = () => {
  const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Budgeting Basics', href: '/' },
        { name: 'Needs vs Wants', href: '/' },
        { name: '50-20-30 Rule', href: '/' },
        { name: 'Savings Goals', href: '/' },
        { name: 'Expense Planner', href: '/' },
        { name: 'Money Mistakes', href: '/' },
        { name: 'Infographics', href: '/' },
        { name: 'AI Chatbot', href: '/' },
        { name: 'Feedback', href: '/' },
        { name: 'Contact Us', href: '/' }
    ];

  return (
    <header className='main-header'>,
      <div className="header-top">
        <div className="header-brand">
          <img src={logo} alt="Logo image" className='logo' />
          <span>BudgetBasics</span>
        </div>
        <div className='header-actions'>
          <div className="search-bar">
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" placeholder='Search topics or keywords'/>
          </div>
          <button className='btn-simulator'>Try budget Simulator</button>
          <div className="user-avatar">
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
      </div>
      <nav className="main-nav">
        <ul className='nav-links'>
          {navLinks.map((link, index) => (
            <li className='nav-item' key={index}><a href={link.href} className='nav-link'>{link.name}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
