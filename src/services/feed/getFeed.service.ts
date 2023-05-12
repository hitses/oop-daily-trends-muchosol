import { ResponseMessage, ResponseStatus } from '../../interfaces/enums'

class GetFeedService {
  async getFeed(id: string) {
    try {
      return {
        status: ResponseStatus.Ok,
        data: {
          type: ResponseMessage.Ok,
          msg: 'getFeedService()',
          id
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
