import './Card.css'
import star from '../../images/star.png'


export default function Card(props) {
  return (
    <section>
      <div className='card'>
        <img src={props.img} alt='Katie Zaferes' className='card-image' />
        <div className='card-stats'>
          <img src={star} alt='star' className='card-star' />
          <span>{props.rating}</span>
          <span className='gray'>({props.reviewCount}) • </span>
          <span className='gray'>{props.country}</span>
        </div>
        <p>{props.title}</p>
        <p><span className='bold'>From ${props.price}</span> / person</p>
      </div>
      
    </section>
    
  )    
}