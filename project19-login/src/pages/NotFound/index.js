import erro from '../../assets/erro-404.png';
import styles from './NotFound.module.css';

export default function NotFound() {
    return (
        <main className={styles.content}>
            <img src={erro} alt='Not Found Page' className={styles.errorImage}/>            
            <p className={styles.errorText}>Ooops, page not found !!!</p>
        </main>        
    )
}