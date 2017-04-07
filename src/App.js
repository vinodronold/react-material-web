import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from "./docs/home"
import ButtonDoc from "./docs/button-doc"
import FabDoc from "./docs/fab-doc"
import CardDoc from "./docs/card-doc"

import "./App.css"

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <div className="App-header">
            <h2>React MDC Web</h2>
            <Link to="/">HOME</Link>
          </div>

          <div className="App-detail">
            <Route exact path="/" component={Home} />
            <Route path="/button" component={ButtonDoc} />
            <Route path="/fab" component={FabDoc} />
            <Route path="/card" component={CardDoc} />
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
