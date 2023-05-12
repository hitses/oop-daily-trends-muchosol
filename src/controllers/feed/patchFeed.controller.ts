import { Request, Response } from 'express'
import PatchFeedService from '../../services/feed/patchFeed.service'

class PatchFeedController {
  async patchFeed(req: Request, res: Response) {
    const { status, data } = await new PatchFeedService().patchFeed(
      req.params.id
    )
    return res.status(status).send(data)
  }
}

export default PatchFeedController
