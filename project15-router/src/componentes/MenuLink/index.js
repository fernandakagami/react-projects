import styles from './MenuLink.module.css';

import { Link, useLocation } from 'react-router-dom';

export default function MenuLink({ children, to }) {
    const localizacao = useLocation();
    return (
        <Link className={`
            ${styles.link}
            ${localizacao.pathname === to ? styles.linkDestacado : ""}
            `} to={to}>
                { children }
        </Link>
    )
}