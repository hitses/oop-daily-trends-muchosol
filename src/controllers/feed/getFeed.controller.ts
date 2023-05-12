import { Request, Response } from 'express'
import GetFeedService from '../../services/feed/getFeed.service'

class GetFeedController {
  async getFeed(req: Request, res: Response) {
    const { status, data } = await new GetFeedService().getFeed(req.params.id)
    return res.status(status).send(data)
  }
}

export default GetFeedController
