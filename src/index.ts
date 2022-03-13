import 'dotenv/config'
import express from 'express'
import shortenerRoute from './api/routes/routes'
import MongoConnection from './db/mongoConnection'

const database = new MongoConnection()
database.connect()

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000

app.use(shortenerRoute)

app.listen(PORT, () => {
  console.log(`express is litening in ${PORT}`)
})
