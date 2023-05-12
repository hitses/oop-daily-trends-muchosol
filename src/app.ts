import express from 'express'
import morgan from 'morgan'
import Database from './db'
import { AppConfig } from './interfaces/enums'
import routes from './routes'

class app {
  app: any
  port: string = AppConfig.PORT
  db = new Database()

  constructor() {
    this.app = express()

    // Database connection
    this.databaseConnection()

    // Middlewares
    this.middlewares()

    // Routes
    this.routes()
  }

  databaseConnection() {
    this.db.dbConnection()
  }

  middlewares() {
    this.app.use(express.json())
    this.app.use(morgan('dev'))
  }

  routes() {
    this.app.use('/api', routes)
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server running at http://localhost:${this.port}`)
    })
  }
}

export default app
