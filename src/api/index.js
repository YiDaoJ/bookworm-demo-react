import express from 'express'
import path from 'path'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import Promise from 'bluebird'

import languages from './routes/languages'
import projects from './routes/projects'

import ProjModel from './models/projects'
import LangModel from './models/languages'

const app = express()
// const router = express.Router()

app.use(bodyParser.json())
// mongoose.Promise = Promise
// mongoose.connect('mongodb://localhost/i18n', { useMongoClient: true }) 

app.get('/', (req, res) => {
  res.send('API Initialized')
})

// router.get('/', (req, res) => {
//   res.json({ message: 'API Initialized' })
// })

// app.use("/api/projects", projects)
// app.use("/api/languages", languages)
// app.use('/api', router)

app.listen(3001, () => console.log("Running on localhost:3001"))

 // "api": "nodemon ./src/api/index.js"