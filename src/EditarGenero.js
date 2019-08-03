import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const EditarGenero =(props) => {
    
    const [name, setName] = useState('')
    const [success, setSuccess] = useState(false)
    const id = props.match.params.id

    useEffect(() => {
        axios.get(`/api/genres/${id}`)
        .then(res => {
            setName(res.data.name)
        })
    }, [props.match.params.id])

    const onchange = e => {
        setName(e.target.value)
    }

    const save = () => {
        axios.put(`/api/genres/${id}`, {
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
      <h1>Editar Genero</h1>
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

export default EditarGenero