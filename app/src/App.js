import React, { Component } from 'react';
import Search from './components/search'
import Library from './components/library'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      film : {}
    }
  }

  addFilmSelect(event) {
    this.setState({ film : event })
  }

  render() {
    return (
      <div className="contenedor">
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="#/">
          <img src="/logo.png" width="30" height="30" className="d-inline-block align-top" alt=""/>
            Rokketlabs
          </a>
        </nav>
        <div className="row">
          <Search addFilmSelect={this.addFilmSelect.bind(this)} />
          <Library selectFilm={this.state.film} />
        </div>
      </div>
    )
  }
  
}

export default App;
