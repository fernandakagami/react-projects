import { Link, useLocation } from 'react-router-dom';
import styles from './NavLink.module.css';

export default function NavLink({ children, to }) {
    const location = useLocation();

    return (
        <Link
            className={`
                ${styles.link}
                ${location.pathname === to ? styles.highlighted : ""}
            `}
            to={to}>
            {children}
        </Link>
    )
}