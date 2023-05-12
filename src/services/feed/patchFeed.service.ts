import { ResponseMessage, ResponseStatus } from '../../interfaces/enums'

class PatchFeedService {
  async patchFeed(id: string) {
    try {
      return {
        status: ResponseStatus.Ok,
        data: {
          type: ResponseMessage.Ok,
          msg: 'patchFeedService()',
          id
        }
      }
    } catch (err) {
      return {
        status: ResponseStatus.InternalServerError,
        data: {
          message: `patchFeedService() ${ResponseMessage.InternalServerError}`,
          err
        }
      }
    }
  }
}

export default PatchFeedService
