import BotaoPrincipal from 'componentes/BotaoPrincipal';
import styles from './NaoEncontrada.module.css';

import erro404 from "assets/erro_404.png";
import { useNavigate } from 'react-router-dom';

export default function NaoEncontrada() {
    const navegar = useNavigate();

    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>
                    404
                </span>

                <h1 className={styles.titulo}>
                    Ops! Página não encontrada!
                </h1>

                <p className={styles.paragrafo}>
                    Tem certeza que era isso que você estava procurando?                
                </p>

                <div 
                    className={styles.botaoContainer}
                    onClick={() => navegar("/")}
                >
                    <BotaoPrincipal tamanho="lg">
                        Voltar
                    </BotaoPrincipal>
                </div>

                <img
                    className={styles.imageCachorro}
                    src={erro404}
                    alt="Cachorro de óculos"
                />
            </div>
            <div className={styles.espacoEmBranco}>

            </div>
        </>
        
    )
}