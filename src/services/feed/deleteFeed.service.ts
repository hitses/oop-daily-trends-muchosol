import { ResponseMessage, ResponseStatus } from '../../interfaces/enums'

class DeleteFeedService {
  async deleteFeed(id: string) {
    try {
      return {
        status: ResponseStatus.Ok,
        data: {
          type: ResponseMessage.Ok,
          msg: 'deleteFeedService()',
          id
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
