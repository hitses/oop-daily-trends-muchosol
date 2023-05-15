import { Request, Response, NextFunction } from 'express'
import { ResponseStatus } from '../interfaces/enums'

export const paramsIdNotFound = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.params.id)
      return res.status(ResponseStatus.NotFound).json({
        data: {
          message: 'Feed ID not found'
        }
      })

    next()
  } catch (error) {
    return res.status(ResponseStatus.InternalServerError).json({
      data: {
        message: 'paramsIdNotFound() middleware'
      }
    })
  }
}
