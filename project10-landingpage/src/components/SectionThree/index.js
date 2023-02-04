import ListContainer from '../ListContainer'
import './SectionThree.css'

function SectionThree() {
    return (
        <section className='Section-Three-Background'>
            <div className='Section-Three'>
                <div>
                    <h4 className='Section-Three-Title-Recent'>recent</h4>
                    <h3 className='Section-Three-Title-Project'>project</h3>
                </div>
                <ListContainer />            
            </div>                           
        </section>
    )
}

export default SectionThree