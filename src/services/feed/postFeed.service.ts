import { ResponseMessage, ResponseStatus } from '../../interfaces/enums'

class PostFeedService {
  async postFeed(feed: any) {
    // TODO: add type
    try {
      return {
        status: ResponseStatus.Ok,
        data: {
          type: ResponseMessage.Ok,
          msg: 'postFeedService()',
          feed
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
