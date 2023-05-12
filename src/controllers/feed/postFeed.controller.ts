import { Request, Response } from 'express'
import PostFeedService from '../../services/feed/postFeed.service'

class PostFeedController {
  async postFeed(req: Request, res: Response) {
    const { status, data } = await new PostFeedService().postFeed(req.body)
    return res.status(status).send(data)
  }
}

export default PostFeedController
