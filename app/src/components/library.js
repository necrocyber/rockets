import React, { Component } from 'react'

class Library extends Component {
    constructor(props) {
        super(props)
        this.state = {
            films : [],
            film : {}
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/api')
        .then(response => response.json())
        .then(result => {
            this.setState({ films: result })
        })
    }

    componentWillReceiveProps(newProps) {
        const { Title, Year, Poster } = newProps.selectFilm
        this.setState({ film: newProps.selectFilm })
        this.setState({
            films : [...this.state.films, { title: Title, year: parseInt(Year), poster: Poster }]
        })
        fetch('http://localhost:3000/api', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                title: Title,
                year: parseInt(Year),
                poster: Poster
            })
        })
    }
    render () {

        const films = (this.state.films).map((film, i) => {
            return (
                <div key={i} className="card clean-col col-2">
                    <div className="card-body">
                        <img className="image-resize card-img-top" src={film.poster} alt=""/>
                    </div>
                    <div className="card-footer">
                        <label> { film.title } </label>
                    </div>
                </div>
            )
        })

        return (
            <div className="col-9 library">
                <div className="container-fluid">
                    { films }
                </div>
            </div>
        )
    }
}

export default Library