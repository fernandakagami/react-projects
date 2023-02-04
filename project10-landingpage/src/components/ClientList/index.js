import bni from '../../images/client/image 4.png'
import honda from '../../images/client/image 5.png'
import yamaha from '../../images/client/image 6.png'
import solusi from '../../images/client/image 7.png'
import bank from '../../images/client/image 8.png'
import granola from '../../images/client/image 9.png'
import stadt from '../../images/client/image 10.png'
import bnb from '../../images/client/image 11.png'
import './ClientList.css'

const clients = [bni, honda, yamaha, solusi, bank, granola, stadt, bnb]

function ClientList() {
    return (
        <div>
            <ul className='Client-List'>
                { clients.map( (client) => (
                    <li className='Client' key={client}>
                        <img src={client} alt={client}></img>
                    </li>                        
                ))}                    
            </ul>
        </div>
    )
}

export default ClientList