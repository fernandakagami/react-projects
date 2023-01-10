import './Item.css'
import pin from '../../images/pin.png'

export default function Item(props) {    
    return (
        <section className="item">
            <div> 
                <img src={props.imageUrl} alt={props.title} className="item-image"></img>              
            </div>
            <div>
                <section className='item-info'>
                    <img src={pin} alt="pin" className='item-pin'></img>
                    <h3>{props.location}</h3>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>                    
                </section>
                <h2>{props.title}</h2>
                <small>{props.startDate} - {props.endDate}</small>
                <p>{props.description}</p>
            </div>
        </section>
    )
}