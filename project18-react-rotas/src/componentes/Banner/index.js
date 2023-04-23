import bannerColorido from '../../assets/bannercolorido.png';
import styles from './Banner.module.css';

export default function Banner() {
    return (
        <>
            <img 
                src={bannerColorido}
                alt="banner colorido"
                className={styles.imagem}
            ></img>
        </>
    )
}