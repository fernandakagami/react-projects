import './SectionOne.css'
import ContactContainer from '../ContactContainer'
import PersonContainer from '../PersonContainer'

function SectionOne() {
    return (
        <section className='Section-One'>
            <ContactContainer /> 
            <PersonContainer />
        </section>
    )
}

export default SectionOne