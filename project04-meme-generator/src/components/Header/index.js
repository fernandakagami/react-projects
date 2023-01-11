import logo from "../../images/troll-face.png"
import './Header.css'


export default function Header() {
    return (
        <header className="header">
            <img src={logo} alt="logo" className="header-image"></img>
            <h2 className="header-title">Meme Generator</h2>
            <h4 className="header-project">React Course - Project 3</h4>
        </header>        
    )
}