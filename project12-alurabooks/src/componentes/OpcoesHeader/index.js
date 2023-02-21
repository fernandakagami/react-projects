import styled from 'styled-components';

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

const Opcoes = styled.ul`
  display: flex;
`

const Opcao = styled.li`
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 15px;
  cursor: pointer;
  height: 100%;
`

function OpcoesHeader() {
    return (        
        <Opcoes>       
          { textoOpcoes.map( (texto) => (
            <Opcao key={texto}>
              <p>{texto}</p>
            </Opcao>
          ))}   
        </Opcoes>
    )
}

export default OpcoesHeader