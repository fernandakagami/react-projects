import React from 'react';
import style from './Botao.module.scss';

interface Props {
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void,
  children?: React.ReactNode
}

function Botao({ onClick, type, children }: Props) {
  return (
    <button onClick={onClick} type={type} className={style.botao}>
        {children}
    </button>
  )
}

class Botao1 extends React.Component<any, {
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void}> {
  render() {
    const { type = "button", onClick } = this.props;
      return (
          <button onClick={onClick} type={type} className={style.botao}>
              {this.props.children}
          </button>
      )
  }
}

export default Botao;