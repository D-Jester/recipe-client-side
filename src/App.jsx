import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

//importing component
import Routing from './components/Routing'

//importing global style
import './styles/GlobalStyles.css'


function App() {
  return (
    <div>
      <Router>
          <Routing />
      </Router>
    </div>
  )
}

export default App
