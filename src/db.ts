import mongoose from 'mongoose'
import { DatabaseURI } from './interfaces/enums'

mongoose.set('strictQuery', false)

class Database {
  URI: string = DatabaseURI.LOCAL

  dbConnection() {
    try {
      mongoose.connect(this.URI)
      console.log('DB is connected')
    } catch (err) {
      console.error('Error in DB connection: ', err)
    }
  }
}

export default Database
