import './SectionChooseUs.css'
import girl from '../../images/girl.png'

function SectionChooseUs() {
    return (
        <section className='Section-Choose-Us'>
            <div className='Section-Choose-Us-Container'>
                <img src={girl} alt='girl' className='Section-Choose-Us-Image'></img>
                <div className='Section-Choose-Us-Text'>
                    <h5>Why choose us?</h5>
                    <p><strong>Digidiga</strong> selalu menganggap client sebagai teman yang akan kami bantu untuk menyelesaikan masalahnya, kami akan bantu Anda karena kami mempunyai kelebihan seperti dibawah ini.</p>
                </div>    
            </div>            
        </section>
        
    )
}

export default SectionChooseUs