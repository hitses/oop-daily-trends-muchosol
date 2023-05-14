import { PostFeedInterface } from '../../interfaces/types'
import Feed from '../../models/feed.model'
import ServerResponse from '../../utils/response'

class PostFeedService {
  async postFeed(feed: PostFeedInterface) {
    try {
      const newFeed = await Feed.create(feed)

      newFeed.save()

      return new ServerResponse().createdResponse(newFeed)
    } catch (err) {
      return new ServerResponse().errorResponse(err, 'postFeedService()')
    }
  }
}

export default PostFeedService
