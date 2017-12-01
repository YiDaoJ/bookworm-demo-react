import express from 'express'
import apiRouter from './src/api'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello Express')
})

app.use('/api', apiRouter)

app.listen(8060, () => {
  console.info('Express listening on port 8060.')
})