import './SectionSix.css'
import SectionSixContact from '../SectionSixContact';
import SectionSixImage from '../SectionSixImage';

function SectionSix() {
    return (
        <section className='Section-Six'>
            <div className='Section-Six-Container'>
                <div>
                    <h3 className='Section-Six-Contact'>Contact Us</h3>
                    <p className='Section-Six-Text'>Are you interested in working with us or just want to ask question?</p>                      
                    <SectionSixContact />                    
                </div>
                <SectionSixImage />                             
            </div>    
            
            

        </section>
    )
}

export default SectionSix