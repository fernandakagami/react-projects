import './SectionFour.css'
import ClientList from '../ClientList'

function SectionFour() {
    return (
        <section className='Section-Four'>
            <div className='Section-Four-Title'>
                <h4 className='Title-One-Client'>Our</h4>
                <h3 className='Title-Two-Client'>Client</h3>
            </div>
            <ClientList />                   
        </section>
    )
}

export default SectionFour