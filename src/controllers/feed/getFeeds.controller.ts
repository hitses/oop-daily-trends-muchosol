import { Request, Response } from 'express'
import GetFeedsService from '../../services/feed/getFeeds.service'

class GetFeedsController {
  async getFeeds(_req: Request, res: Response) {
    const { status, data } = await new GetFeedsService().getFeeds()
    return res.status(status).send(data)
  }
}

export default GetFeedsController
