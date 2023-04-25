import styles from './Header.module.css';
import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation();

    return (
        <header>
            <nav>
                <NavLink to="/">
                    Início
                </NavLink>
                <NavLink to="/sobremim">
                    Sobre Mim
                </NavLink>
            </nav>
        </header>
    )
}