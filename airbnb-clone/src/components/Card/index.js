import './Card.css'
import star from '../../images/star.png'


export default function Card(props) {  
  return (
    <section>
      <div className='card'>
        {props.openSpots === 0 && <div className='card-badge'>SOLD OUT</div>}
        <img src={props.img} alt={props.id} className='card-image' />
        <div className='card-stats'>
          <img src={star} alt='star' className='card-star' />
          <span>{props.rating}</span>
          <span className='gray'>({props.reviewCount}) • </span>
          <span className='gray'>{props.country}</span>
        </div>
        <p className='card-title'>{props.title}</p>
        <p className='card-price'><span className='bold'>From ${props.price}</span> / person</p>
      </div>
      
    </section>
    
  )    
}