import React from 'react';
import style from './Botao.module.scss';

interface BotaoProps {
  children: React.ReactNode;
}

function Botao({ children }: BotaoProps) {  
    return (
      <button className={style.botao}>
        { children }
      </button>
    )  
}

export default Botao