import { Button, TextField } from "@mui/material"
import { useState } from "react"
import axios from "axios"

const FormularioRestaurante = () => {

    const [nomeRestaurante, setNomeRestaurante] = useState('')

    const aoSubmiterFormulario = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        axios.post('http://localhost:8000/api/v2/restaurantes/', {
            nome: nomeRestaurante
        })
            .then(() => {
                alert("Restaurante Cadastrado com Sucesso")
            })
    }

    return (
        <form onSubmit={aoSubmiterFormulario}>
            <TextField value={nomeRestaurante} onChange={evento => setNomeRestaurante(evento.target.value)} label="Nome do Restaurante" variant="standard" />
            <Button type="submit" variant="outlined">Salvar</Button>
        </form>
    )
}

export default FormularioRestaurante