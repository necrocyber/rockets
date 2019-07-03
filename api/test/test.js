const expect = require('chai').expect
const fetch = require('node-fetch')

const URL = 'http://localhost:3000/api'

describe('API REST', () => {
    it('POST / insert data object', async () => {
        const responsePost = await fetch(URL, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                title: "Film Test",
                year: 1980,
                poster: "http://google.cl"
            })
        })

        expect(responsePost.status).to.be.equal(200)
        const post = await responsePost.json()
        expect(post).to.be.an('Object')
    })

    it('GET / Return Array/object JSON', async () => {
        const response = await fetch(URL)
        expect(response.status).to.be.equal(200)
        const films = await response.json()
        expect(films).to.be.an("Array")
    })
})
