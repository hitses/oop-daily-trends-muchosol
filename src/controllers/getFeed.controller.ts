import { Request, Response } from 'express'
import getFeedService from '../services/getFeed.service'

class getFeedController {
  async getFeed(_req: Request, res: Response) {
    const feed = new getFeedService()
    const { status, data } = await feed.getFeedService()
    return res.status(status).send(data)
  }
}

export default getFeedController
