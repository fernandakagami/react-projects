import React, { useState } from "react";
import Botao from "../Botao";
import style from './Formulario.module.scss';
import { ITarefa } from "../../types/tarefa";
import { v4 as uuidv4 } from 'uuid';

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Formulario( { setTarefas }: Props) {
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00");
  function adicionarTarefa(event: React.FormEvent) {
    event.preventDefault();
    setTarefas(tarefasAntigas =>
      [
        ...tarefasAntigas,
        {
          tarefa,
          tempo,
          selecionado: false,
          completado: false,
          id: uuidv4()
        }
      ]
    )
    setTarefa("")
    setTempo("00:00")
  }

  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um estudo</label>
        <input
          type='text'
          name='tarefa'
          id='tarefa'
          placeholder="O que você quer estudar"
          value={tarefa}
          onChange={evento => setTarefa(evento.target.value)}
          required />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step='1'
          name='tempo'
          id='tempo'
          min='00:00:00'
          max='01:30:00'
          value={tempo}
          onChange={evento => setTempo(evento.target.value)}
          required />
      </div>
      <Botao type='submit'>Adicionar</Botao>
    </form>
  )
}



class Formulario1 extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {
  state = {
    tarefa: "",
    tempo: "00:00"
  }

  adicionarTarefa(event: React.FormEvent) {
    event.preventDefault();
    this.props.setTarefas(tarefasAntigas =>
      [
        ...tarefasAntigas,
        {
          ...this.state,
          selecionado: false,
          completado: false,
          id: uuidv4()
        }
      ]
    )
    this.setState({
      tarefa: "",
      tempo: "00:00:00"
    })
  }

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um estudo</label>
          <input
            type='text'
            name='tarefa'
            id='tarefa'
            placeholder="O que você quer estudar"
            value={this.state.tarefa}
            onChange={evento => this.setState({ ...this.state, tarefa: evento.target.value})}
            required />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            step='1'
            name='tempo'
            id='tempo'
            min='00:00:00'
            max='01:30:00'
            value={this.state.tempo}
            onChange={evento => this.setState({ ...this.state, tempo: evento.target.value})}
            required />
        </div>
        <Botao type='submit'>Adicionar</Botao>
      </form>
    )
  }
}

export default Formulario
