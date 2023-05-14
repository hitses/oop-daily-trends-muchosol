import { FeedConfig } from '../../interfaces/enums'
import { FeedInterface, PostFeedInterface } from '../../interfaces/types'
import ScrapService from '../../utils/playwright'
import Feeds from '../../models/feed.model'
import ServerResponse from '../../utils/response'

class PostFeedsService {
  feeds: PostFeedInterface[] = []

  async getFeeds() {
    const scrapService = new ScrapService()
    const mundoFeeds: PostFeedInterface[] = await scrapService.scrap(
      FeedConfig.mundoUrl,
      FeedConfig.anchorMundoSelector
    )
    const paisFeeds: PostFeedInterface[] = await scrapService.scrap(
      FeedConfig.paisUrl,
      FeedConfig.anchorPaisSelector
    )

    const allFeeds = [...mundoFeeds, ...paisFeeds]

    for (const feed of allFeeds) {
      const existingFeed = this.feeds.find(f => f.href === feed.href)
      if (!existingFeed) {
        this.feeds.push(feed)
      }
    }
  }

  async postFeeds() {
    try {
      await this.getFeeds()

      // Get feeds that already exist in the database
      const existingFeeds: FeedInterface[] = await Feeds.find(
        { href: { $in: this.feeds.map(feed => feed.href) } },
        { _id: 0, href: 1 }
      ).lean()

      // Filter feeds to get only those that do not exist in the database
      const newFeeds: PostFeedInterface[] = this.feeds.filter(
        feed =>
          !existingFeeds.some(existingFeed => existingFeed.href === feed.href)
      )

      // Insert new feeds into the database
      if (newFeeds.length > 0)
        await Feeds.insertMany(newFeeds, { ordered: false })

      return new ServerResponse().createdResponse({
        msg: 'Feeds posted successfully'
      })
    } catch (err) {
      return new ServerResponse().errorResponse(err, 'postFeedsService()')
    }
  }
}

export default PostFeedsService
