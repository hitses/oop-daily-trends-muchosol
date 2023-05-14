import { ResponseStatus } from '../interfaces/enums'

class ServerResponse {
  okResponse(data: object) {
    return {
      status: ResponseStatus.Ok,
      data
    }
  }

  createdResponse(data: object) {
    return {
      status: ResponseStatus.Created,
      data
    }
  }

  deletedResponse(data: object) {
    return {
      status: ResponseStatus.Deleted,
      data
    }
  }

  badRequestResponse(data: object) {
    return {
      status: ResponseStatus.BadRequest,
      data
    }
  }

  notFoundResponse(data: object) {
    return {
      status: ResponseStatus.NotFound,
      data
    }
  }

  timeoutResponse(data: object) {
    return {
      status: ResponseStatus.Timeout,
      data
    }
  }

  errorResponse(err: any, service: string) {
    return {
      status: ResponseStatus.InternalServerError,
      data: {
        message: `${service}`,
        err
      }
    }
  }
}

export default ServerResponse
