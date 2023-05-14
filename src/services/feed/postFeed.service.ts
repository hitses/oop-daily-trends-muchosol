import { ResponseMessage, ResponseStatus } from '../../interfaces/enums'
import { PostFeedInterface } from '../../interfaces/types'
import Feed from '../../models/feed.model'

class PostFeedService {
  async postFeed(feed: PostFeedInterface) {
    try {
      const newFeed = await Feed.create(feed)

      newFeed.save()

      return {
        status: ResponseStatus.Created,
        data: {
          status: ResponseStatus.Created,
          type: ResponseMessage.Created,
          data: {
            _id: newFeed._id,
            text: newFeed.text,
            href: newFeed.href,
            newspaper: newFeed.newspaper
          }
        }
      }
    } catch (err) {
      return {
        status: ResponseStatus.InternalServerError,
        data: {
          message: `postFeedService() ${ResponseMessage.InternalServerError}`,
          err
        }
      }
    }
  }
}

export default PostFeedService
