import { FeedInterface } from '../../interfaces/types'
import Feed from '../../models/feed.model'
import ServerResponse from '../../utils/response'

class GetFeedsService {
  private feeds: FeedInterface[] = []

  async getFeeds() {
    try {
      this.feeds = await Feed.aggregate([
        // Get the five front page stories of each newspaper
        { $sort: { updatedAt: -1 } },
        {
          $group: {
            _id: '$newspaper',
            feeds: { $push: '$$ROOT' }
          }
        },
        {
          $project: {
            newspaper: '$_id',
            feeds: {
              $slice: [
                {
                  $slice: ['$feeds', 5]
                },
                0,
                5
              ]
            }
          }
        },
        { $unwind: '$feeds' },
        {
          $project: {
            _id: '$feeds._id',
            text: '$feeds.text',
            href: '$feeds.href',
            newspaper: '$newspaper',
            updatedAt: '$feeds.updatedAt'
          }
        },
        { $sort: { updatedAt: -1 } },
        { $limit: 10 }
      ])

      return new ServerResponse().okResponse(this.feeds)
    } catch (err) {
      return new ServerResponse().errorResponse(err, 'getFeedsService()')
    }
  }
}

export default GetFeedsService
