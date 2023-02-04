import what from '../../images/contact/what.png'
import email from '../../images/contact/email.png'
import './SectionSixContact.css'

function SectionSixContact() {
    return (
        <div className='Section-Six-Contacts'>
            <div className='Section-Six-Email'>
                <img src={email} alt="email" className='Icon-Contact' />
                <p>ridwansolehsaputra@gmail.com</p>
            </div>
            <div className='Section-Six-What'>
                <img src={what} alt="what" className='Icon-Contact' />
                <p>089628147728</p>
            </div>
        </div>
    )
}

export default SectionSixContact