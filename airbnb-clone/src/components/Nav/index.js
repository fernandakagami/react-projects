import logo from './airbnb-logo.png'
import './Nav.css'

export default function Nav() {
  return (
    <header className='nav-header'>
      <nav className='nav'>
        <img src={logo} alt="logo"></img>
        <h1>airbnb</h1>      
      </nav>
    </header>
    
  )    
}