import './Header.css'

const textOptions = ['About us', 'Our project', 'Clients'];

function Header () {
    return (
      <header className="app-header">
        <h1 className='title'><span>digi</span>diga</h1>     
        <ul className='navegation-bar'>
                { textOptions.map( (textOption) => (
                    <li key={textOption} className='navegation-option'><a href='/'>{textOption}</a></li>                    
                ))}
            </ul>
      </header>
    )
}

export default Header