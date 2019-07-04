import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : '',
            films : []
        }
    }

    searchFilm() {
        fetch('http://www.omdbapi.com/?apikey=4f41e4c2&s=' + this.state.title)
        .then(response => response.json())
        .then(result => {
            if(result.Response !== "True") {
                return
            }

            console.log(result.Search)
            this.setState({ films: result.Search })
        })
    }

    handleChange(event) {
        this.setState({ title: event.target.value })
    }

    addFilm(film) {
        this.props.addFilmSelect(film)
    }

    render () {

        const films = (this.state.films).map((film, i) => {
            return (
                <li onClick={this.addFilm.bind(this, film)} className="row-list" key={i}> { film.Title } </li>
            )
        })


        return (
            <div className="col-3 search">
                <label className="title-search">Search Films</label>
                <div className="box-search">
                    <input onChange={this.handleChange.bind(this)} className="input-search" type="text"/>
                    <span className="badge-search">
                        <FontAwesomeIcon onClick={this.searchFilm.bind(this)} icon={faSearch} />
                    </span>
                </div>
                <hr/>
                <label className="title-list">Save Films to Library</label>
                <ul>
                    { films }
                </ul>
            </div>
        )
    }
}

export default Search