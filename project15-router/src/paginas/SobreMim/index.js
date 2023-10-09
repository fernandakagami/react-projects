import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoMim from "assets/sobre_mim_foto.png";

import styles from "./SobreMim.module.css";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Antonio!
            </h3>

            <img
                src={fotoMim}
                alt="Foto"
                className={styles.fotoSobreMim}
            />
        </PostModelo>
    )
}