import icon1 from "../../images/advantages/icon1.png"
import icon2 from "../../images/advantages/icon2.png"
import icon3 from "../../images/advantages/icon3.png"
import icon4 from "../../images/advantages/icon4.png"
import './SectionFive.css'

function SectionFive() {
    return (
        <section className='Section-Five'>
            <div className='Section-Five-Container'>
                <div className='Section-Five-Title'>
                    <h4 className='Title-One-Advantages'>Our</h4>
                    <h3 className='Title-Two-Advantages'>advantages</h3>
                </div>
                <div>
                    <ul className="Advantages">
                        <li className="Advantage">                         
                            <div className="Advantage-Container">
                                <img src={icon1} alt="icon1" className="Advantage-Icon"></img>                                
                                <div>
                                    <h5 className="Advantage-Title">UI/UX yang Ramah Pengguna</h5>
                                    <p className="Advantage-Content">App dan situs web Anda memiliki analogi yang sama. Pelanggan tidak akan mengunjungi toko Anda dan melihatnya buruk, dan akan langsung pergi meninggalkan website tersebut. Moto kami adalah: <strong className="Advantage-Quote">"Membuat Situs Web yang Ramah Pengguna"</strong> yang memudahkan pelanggan untuk bernavigasi.</p>
                                </div>                            
                            </div>                            
                        </li>
                        <li className="Advantage">                            
                            <div className="Advantage-Container">
                                <img src={icon2} alt="icon2" className="Advantage-Icon"></img>
                                <div>
                                    <h5 className="Advantage-Title">Menangani Pemrograman yang Sulit</h5>
                                    <p className="Advantage-Content">Kamu amu situs web Wordpress atau PHP? Kami bisa menangani keduanya. Programmer kami profesional yang sangat terampil, Bersertifikasi lembaga profesional. Bahkan dengan fungsi yang sulit atau sistem yang besar, kami siap untuk menantang diri sendiri. Untuk setiap permintaan pelanggan, kami selalu mencari solusi untuk mewujudkan hasil dan mengusulkan ide daripada mencari alasan mengapa kami tidak bisa melakukannya.</p>
                                </div>                               
                            </div>                        
                        </li>
                        <li className="Advantage">                            
                            <div className="Advantage-Container">
                                <img src={icon3} alt="icon3" className="Advantage-Icon"></img>
                                <div>
                                    <h5 className="Advantage-Title">Berorientasi Hasil</h5>
                                    <p className="Advantage-Content">Salah satu moto kami adalah 'Buat situs web yang berkontribusi pada hasil bisnis Anda'. Kami tidak hanya membuat website, kami memiliki prinsip bahwa setiap Website yang dibuat akan memberikan kontribusi untuk bisnis Anda. Kami berkomitmen untuk membantu bisnis Anda berkembang dan berkembang.</p>
                                </div>                                
                            </div>                        
                        </li>
                        <li className="Advantage">                            
                            <div className="Advantage-Container">
                                <img src={icon4} alt="icon4" className="Advantage-Icon"></img>
                                <div>
                                    <h5 className="Advantage-Title">Layanan Pelanggan Profesional</h5>
                                    <p className="Advantage-Content">Tim kami selalu merespon dengan cepat dan tulus kepada pelanggan dengan jawaban yang benar, berdasarkan pengetahuan luas mereka yang dikoordinasikan dengan manajemen, desainer, dan pemrogram. Jika Anda memiliki masalah dengan dukungan pelanggan kami, harap segera hubungi kami. Kami bertujuan untuk menjadi mitra yang baik yang menghilangkan stres dan membantu bisnis Anda.</p>
                                </div>                                
                            </div>
                        </li>
                    </ul>
                </div>           
            </div>            
        </section>
    )
}

export default SectionFive
