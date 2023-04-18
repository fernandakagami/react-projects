import styles from "./Banner.module.css";
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/new-moon.png';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Olá, Mundo!</h1>
                <p className={styles.paragrafo}>
                    Hello, hello. I am Hello.
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    alt="circulo colorido"
                    aria-hidden={true}
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="minha foto"                    
                />

            </div>
        </div>
    )
}