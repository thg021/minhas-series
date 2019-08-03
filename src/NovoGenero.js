import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'


const NovoGenero = () => {
    const [name, setName] = useState('')
    const [success, setSuccess] = useState(false)

    const onchange = e => {
        setName(e.target.value)
    }
    
    const save = () => {
        axios.post('/api/genres', {
            name
        })
        .then(res => {
            console.log(res)
            setSuccess(true)
        })
    }

    if(success){
        return <Redirect to='/generos' />
    }

  return (
    <div className='container'>
      <h1>Novo Genero</h1>
      <form>
          <div  className='form-group'>
            <label htmlFor='name'>name</label>
                <input type='text' value={name} onChange={onchange} className='form-control' id='name'  placeholder='Digite o nome do novo genero' />
            </div>
            <button onClick={save} type='button' className='btn btn-success'>Salvar</button>
        </form>
        <pre>{name}</pre>
    </div>
  )
}

export default NovoGenero