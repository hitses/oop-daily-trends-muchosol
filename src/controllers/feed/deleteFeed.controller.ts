import { Request, Response } from 'express'
import DeleteFeedService from '../../services/feed/deleteFeed.service'

class DeleteFeedController {
  async deleteFeed(req: Request, res: Response) {
    const { status, data } = await new DeleteFeedService().deleteFeed(
      req.params.id
    )
    return res.status(status).send(data)
  }
}

export default DeleteFeedController
