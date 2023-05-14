import { ResponseMessage, ResponseStatus } from '../../interfaces/enums'
import Feed from '../../models/feed.model'

class DeleteFeedService {
  async deleteFeed(_id: string) {
    try {
      await Feed.findOneAndUpdate(
        { _id, delete: false },
        { delete: true },
        { new: true }
      )

      return {
        status: ResponseStatus.Ok,
        data: {
          type: ResponseMessage.Ok,
          msg: 'deleteFeedService()',
          message: 'Feed deleted successfully'
        }
      }
    } catch (err) {
      return {
        status: ResponseStatus.InternalServerError,
        data: {
          message: `deleteFeedService() ${ResponseMessage.InternalServerError}`,
          err
        }
      }
    }
  }
}

export default DeleteFeedService
