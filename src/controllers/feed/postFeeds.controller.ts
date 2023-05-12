import { Request, Response } from 'express'
import PostFeedsService from '../../services/feed/postFeeds.service'

class PostFeedsController {
  async postFeeds(_req: Request, res: Response) {
    const { status, data } = await new PostFeedsService().postFeeds()
    return res.status(status).send(data)
  }
}

export default PostFeedsController
