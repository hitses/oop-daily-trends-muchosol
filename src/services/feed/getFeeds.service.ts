import { ResponseMessage, ResponseStatus } from '../../interfaces/enums'

class GetFeedsService {
  async getFeeds() {
    try {
      return {
        status: ResponseStatus.Ok,
        data: {
          type: ResponseMessage.Ok,
          msg: 'getFeedsService()'
        }
      }
    } catch (err) {
      return {
        status: ResponseStatus.InternalServerError,
        data: {
          message: `getFeedsService() ${ResponseMessage.InternalServerError}`,
          err
        }
      }
    }
  }
}

export default GetFeedsService
