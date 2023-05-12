import { ResponseMessage, ResponseStatus } from '../../interfaces/enums'

class PostFeedsService {
  async postFeeds() {
    try {
      return {
        status: ResponseStatus.Ok,
        data: {
          type: ResponseMessage.Ok,
          msg: 'postFeedsService()'
        }
      }
    } catch (err) {
      return {
        status: ResponseStatus.InternalServerError,
        data: {
          message: `postFeedsService() ${ResponseMessage.InternalServerError}`,
          err
        }
      }
    }
  }
}

export default PostFeedsService
