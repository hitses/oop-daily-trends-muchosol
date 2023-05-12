import { ResponseMessage, ResponseStatus } from '../interfaces/enums'

class GetFeedService {
  async getFeedService() {
    try {
      return {
        status: ResponseStatus.Ok,
        data: {
          type: ResponseMessage.Ok
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
