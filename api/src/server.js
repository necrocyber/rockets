import express, { json } from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import index from './routes/index.route'
import { connect } from './database'

const app = express()
connect()

// Middleware
app.use(json())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({
    extended: true
}));

// Routes
app.use(index)

export default app