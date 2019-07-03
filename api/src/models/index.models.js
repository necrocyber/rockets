import { Schema, model } from 'mongoose'

const filmSchema = new Schema({
    title : {
        type: String,
        required: true // Validated
    },
    year : Number,
    poster: String
})

export default model('film', filmSchema)