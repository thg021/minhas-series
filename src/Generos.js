import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const Generos = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('/api/genres')
    .then(res => {
      setData(res.data.data)
    })
  }, [])

  const deleteGenero = id => {
    axios.delete(`/api/genres/${id}`)
    .then(res => { 
      const filtro = data => data.filter(item => item.id !== id )
      setData(filtro)
    })
  }

  const renderLine = record => {
    return (
      <tr key={record.id}>
        <th scope='row'>{record.id}</th>
        <td>{record.name}</td>
        <td>
          <Button tag={Link} to={`/genero/${record.id}`}>Editar</Button>
          <Button onClick={() => deleteGenero(record.id)}>Deletar</Button></td>
      </tr>
    )
  }

  if(data.length === 0){
    return(
      <div className='container'>
        <h1>Generos</h1>
        <div class='alert alert-warning' role='alert'>
          Não há gêneros cadastrado
        </div>
      </div>
    )
  }



  return (
    <div className="container">
      <h1>Gerenos</h1>
      <Button tag={Link} to="/generos/novo">Novo Genero</Button>
      <table className='table table-dark'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Nome</th>
            <th scope='col'>Ações</th>
          </tr>
        </thead>
        <tbody>
         {data.map(renderLine)}
        </tbody>
        </table>
    </div>
  )
}

export default Generos