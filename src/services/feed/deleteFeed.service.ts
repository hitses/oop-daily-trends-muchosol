import Feed from '../../models/feed.model'
import ServerResponse from '../../utils/response'

class DeleteFeedService {
  async deleteFeed(_id: string) {
    try {
      await Feed.findOneAndUpdate(
        { _id, delete: false },
        { delete: true },
        { new: true }
      )

      return new ServerResponse().deletedResponse({
        msg: 'Feed deleted successfully'
      })
    } catch (err) {
      return new ServerResponse().errorResponse(err, 'deleteFeedService()')
    }
  }
}

export default DeleteFeedService
