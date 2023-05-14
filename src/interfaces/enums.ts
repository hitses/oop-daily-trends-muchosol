export enum DatabaseURI {
  LOCAL = 'mongodb://localhost:27017/daily-trends'
}

export enum AppConfig {
  PORT = '3000'
}

export enum ResponseStatus {
  Ok = 200,
  Created = 201,
  Deleted = 204,
  BadRequest = 400,
  NotFound = 404,
  Timeout = 408,
  InternalServerError = 500
}

export enum ResponseMessage {
  Ok = 'OK',
  Created = 'CREATED',
  Deleted = 'DELETED',
  BadRequest = 'BAD_REQUEST',
  NotFound = 'NOT_FOUND',
  Timeout = 'TIMEOUT',
  InternalServerError = 'INTERNAL_SERVER_ERROR'
}

export enum FeedConfig {
  paisUrl = 'https://elpais.com/',
  mundoUrl = 'https://www.elmundo.es/',
  mundoName = 'El Mundo',
  paisName = 'El País',
  anchorMundoSelector = 'a.ue-c-cover-content__link',
  h2MundoSelector = 'h2.ue-c-cover-content__headline',
  anchorPaisSelector = 'h2.c_t > a'
}

export enum USER_AGENT {
  userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' +
    ' AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
}
