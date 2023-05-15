import { Request, Response, NextFunction } from 'express'
import { ResponseStatus } from '../interfaces/enums'

export const bodyNotFound = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res.status(ResponseStatus.NotFound).json({
        data: {
          message: 'Body not found'
        }
      })
    }

    next()
  } catch (error) {
    return res.status(ResponseStatus.InternalServerError).json({
      data: {
        message: 'bodyNotFound() middleware'
      }
    })
  }
}
