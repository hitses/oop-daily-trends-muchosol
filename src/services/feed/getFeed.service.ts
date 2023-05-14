import { ResponseMessage, ResponseStatus } from '../../interfaces/enums'
import { FeedInterface } from '../../interfaces/types'
import Feed from '../../models/feed.model'

class GetFeedService {
  private feed!: FeedInterface

  async getFeed(_id: string) {
    try {
      this.feed =
        (await Feed.findById(_id, { delete: false }, { _id: 0, __v: 0 })) ??
        ({} as FeedInterface)

      return {
        status: ResponseStatus.Ok,
        data: {
          type: ResponseMessage.Ok,
          msg: 'getFeedService()',
          feed: this.feed
        }
      }
    } catch (err) {
      return {
        status: ResponseStatus.InternalServerError,
        data: {
          message: `getFeedService() ${ResponseMessage.InternalServerError}`,
          err
        }
      }
    }
  }
}

export default GetFeedService
