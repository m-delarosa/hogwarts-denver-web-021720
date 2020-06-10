import React, { Component } from "react"
import "../App.css"
import Nav from "./components/Nav"
import HogsPage from './containers/HogsPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <HogsPage />
      </div>
    )
  }
}

export default App
