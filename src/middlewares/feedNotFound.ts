import { Request, Response, NextFunction } from 'express'
import feedModel from '../models/feed.model'
import { ResponseStatus } from '../interfaces/enums'

export const feedNotFound = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const feed = await feedModel.findOne({ _id: req.params.id, delete: false })

    if (!feed)
      return res.status(ResponseStatus.NotFound).json({
        data: {
          message: 'Feed not found'
        }
      })

    next()
  } catch (error) {
    return res.status(ResponseStatus.InternalServerError).json({
      data: {
        message: 'feedNotFound() middleware'
      }
    })
  }
}
