import { TableContainer, Paper, Table, TableHead, Button } from '@mui/material'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { useState, useEffect } from 'react'
import IRestaurante from "../../../interfaces/IRestaurante"
import axios from "axios"
import { Link } from 'react-router-dom'

const AdministracaoRestaurantes = () => {

    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])

    useEffect(() => {
        axios.get<IRestaurante[]>('http://localhost:8000/api/v2/restaurantes/')
            .then(resposta => setRestaurantes(resposta.data))
    }, [])

    const excluir = (restauranteAhSerExcluido: IRestaurante) => {
        axios.delete(`http://localhost:8000/api/v2/restaurantes/${restauranteAhSerExcluido.id}/`)
            .then(() => {
                const listaRestaurante = restaurantes.filter(restaurante => restaurante.id !== restauranteAhSerExcluido.id)
                setRestaurantes([...listaRestaurante])
            })
    }

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Nome
                        </TableCell>
                        <TableCell>
                            Editar
                        </TableCell>
                        <TableCell>
                            Excluir
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {restaurantes.map(restaurante =>                     
                        <TableRow key={restaurante.id}>
                            <TableCell>
                                {restaurante.nome}
                            </TableCell>
                            <TableCell>
                                [ <Link to={`/admin/restaurantes/${restaurante.id}`}>editar</Link> ]
                            </TableCell>
                            <TableCell>
                                <Button variant="outlined" color="error" onClick={() => excluir(restaurante)}>Excluir</Button>
                            </TableCell>
                        </TableRow>
                        )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AdministracaoRestaurantes