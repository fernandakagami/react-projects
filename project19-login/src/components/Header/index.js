import styles from './Header.module.css';
import NavLink from '../NavLink';

export default function Header() {    
    return (
        <header className={styles}>
            <nav>
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/register">
                    Register
                </NavLink>
            </nav>
        </header>
    )
}