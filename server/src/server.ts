import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import pino from 'pino-http'
import logger from './logger'

dotenv.config()
const port = 3000

const start = async (): Promise<void> => {
  const app = express()
  app.use(pino({ logger }))
  app.use(cors())

  app.get('/', async (req, res) => {
    return res.send('Hello World!')
  })

  app.listen(port, () => logger.info(`App listening at http://localhost:${port}`))
}

start()
