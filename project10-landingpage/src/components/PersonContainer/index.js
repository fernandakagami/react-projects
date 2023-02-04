import circle from '../../images/circle.png'
import person from '../../images/person.jpg'
import './PersonContainer.css'

function PersonContainer() {
    return (
        <div className='Person-Container'> 
            <img className='circle' src={circle} alt='circle'></img>         
            <img className='person' src={person} alt='person'></img>
        </div>
    )    
}

export default PersonContainer