import React, { useState, useEffect} from 'react';
import axios from 'axios'
import Header from './Header'
import Home from './Home'
import Generos from './Generos'
import NovoGenero from './NovoGenero'
import EditarGenero from './EditarGenero'

import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  const [data, setData] = useState({})

  useEffect(() => {
    axios.get('./api').then(res => {
      setData(res.data)
    })
  }, [])

  return (   
    <Router>
      <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/generos" component={Generos} />
          <Route exact path="/genero/:id" component={EditarGenero} />
          <Route exact path="/generos/novo" component={NovoGenero} />
          
      </div>
    </Router>
  );
}

export default App;
