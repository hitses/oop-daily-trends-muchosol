import { FeedInterface, NewspaperType } from '../../interfaces/types'
import Feed from '../../models/feed.model'
import ServerResponse from '../../utils/response'

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

      return new ServerResponse().okResponse(this.feed)
    } catch (err) {
      return new ServerResponse().errorResponse(err, 'patchFeedService()')
    }
  }
}

export default PatchFeedService
