import { Request, Response, NextFunction } from 'express'
import { isValidObjectId } from 'mongoose'
import { ResponseStatus } from '../interfaces/enums'

export const notObjectId = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!isValidObjectId(req.params.id))
      return res.status(ResponseStatus.BadRequest).json({
        data: {
          message: 'Not valid MongoDB ID'
        }
      })

    next()
  } catch (error) {
    return res.status(ResponseStatus.InternalServerError).json({
      data: {
        message: 'notObjectId() middleware'
      }
    })
  }
}
