export enum DatabaseURI {
  LOCAL = 'mongodb://localhost:27017/daily-trends'
}

export enum AppConfig {
  PORT = '3000'
}

export enum ResponseStatus {
  Ok = 200,
  Created = 201,
  BadRequest = 400,
  NotFound = 404,
  InternalServerError = 500
}

export enum ResponseMessage {
  Ok = 'OK',
  Created = 'CREATED',
  BadRequest = 'BAD_REQUEST',
  NotFound = 'NOT_FOUND',
  InternalServerError = 'INTERNAL_SERVER_ERROR'
}
