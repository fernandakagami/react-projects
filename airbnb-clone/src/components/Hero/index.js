import photo from './airbnb-image.png'
import './Hero.css'

export default function Hero() {
    return (
        <section className='hero'>
            <img className='hero-photo' src={photo} alt='photos'/>
            <h2 className='hero-title'>Online Experiences</h2>         
            <p className='hero-text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}