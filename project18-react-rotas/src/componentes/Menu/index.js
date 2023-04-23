import { Link } from 'react-router-dom';
import styles from './Menu.module.css';


export default function Menu() {
    return (
        <header>
            <nav className={styles.nav}>
                <Link to="/" className={styles.link}>
                    Home
                </Link>
                <Link to="/sobremim" className={styles.link}>
                    Sobre Mim
                </Link>
            </nav>
        </header>
    )
}