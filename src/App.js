import React from 'react';
import Header from './Header'
import Home from './Home'
import {
  BrowserRouter as Router, 
  Route
} from 'react-router-dom'
function App() {
  return (   
    <Router>
      <div>
          <Header />
          <Route  path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
