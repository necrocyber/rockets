import film from '../models/index.models'

export function api(req, res) {
    res.send("Welcome to my API")
}

export async function getFilm(req, res) {
    const films = await film.find()
    res.json(films)
}

export async function postFilm(req, res) {
    const post = {
        title : req.body.title,
        year : req.body.year,
        poster : req.body.poster
    }

    try {
        const data = await film.create(post)
        res.json(data)
    } catch(e) {
        res.send("error")
        console.log("insert error mongoose")
    }

}