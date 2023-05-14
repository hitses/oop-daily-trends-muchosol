import { FeedInterface } from '../../interfaces/types'
import Feed from '../../models/feed.model'
import ServerResponse from '../../utils/response'

class GetFeedService {
  private feed!: FeedInterface

  async getFeed(_id: string) {
    try {
      this.feed =
        (await Feed.findOne(
          { _id, delete: false },
          { _id: 0, __v: 0, delete: 0 }
        )) ?? ({} as FeedInterface)

      return new ServerResponse().okResponse({ feed: this.feed })
    } catch (err) {
      return new ServerResponse().errorResponse(err, 'getFeedService()')
    }
  }
}

export default GetFeedService
