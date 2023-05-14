import { ResponseMessage, ResponseStatus } from '../../interfaces/enums'
import { FeedInterface, NewspaperType } from '../../interfaces/types'
import Feed from '../../models/feed.model'

class PatchFeedService {
  private feed!: FeedInterface
  async patchFeed(
    _id: string,
    newspaper: NewspaperType,
    text: string,
    href: string
  ) {
    try {
      this.feed =
        (await Feed.findOneAndUpdate(
          { _id, delete: false },
          { text, href, newspaper },
          { runValidators: true, new: true }
        )) ?? ({} as FeedInterface)

      return {
        status: ResponseStatus.Ok,
        data: {
          type: ResponseMessage.Ok,
          msg: 'patchFeedService()',
          feed: this.feed
        }
      }
    } catch (err) {
      return {
        status: ResponseStatus.InternalServerError,
        data: {
          message: `patchFeedService() ${ResponseMessage.InternalServerError}`,
          err
        }
      }
    }
  }
}

export default PatchFeedService
