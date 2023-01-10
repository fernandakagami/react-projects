import reactimage from '../../images/react.png'
import './Header.css'

export default function Header() {
    return (
        <header>
            <div className='title-container'>
                <div className='title'>
                    <img src={reactimage} alt="react logo" className='react-logo' />
                    <h1 className='title-name'>ReactFacts</h1>
                </div>
                <h2 className='subtitle'> React Course - Project 1 </h2>                
            </div>            
        </header>        
    )    
}

