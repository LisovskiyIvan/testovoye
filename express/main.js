import express from 'express'
import {userRouts} from './userRouts.js'

const app = express()
const PORT = process.env.PORT || 8080
const HOST = process.env.HOST || 'localhost'

app.use(express.urlencoded({ extended: true }))
app.use(userRouts)

app.get('/', (req, res) => res.end('This is users crud'))


app.listen(PORT, HOST, () => console.log(`server is listening on http://${HOST}:${PORT}`))