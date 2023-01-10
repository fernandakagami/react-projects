import logo from '../../images/logo.png'
import './Header.css'

export default function Header() {
    return (
        <header>
            <img src={logo} alt='logo' className='logo'></img>
            <h1 className='title'>my travel journal.</h1>
        </header>
    )
}