import { Request, Response, NextFunction } from 'express'
import { ResponseStatus } from '../interfaces/enums'

export const invalidNewspaperType = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newspaper = req.body.newspaper
    if (
      typeof newspaper !== 'string' ||
      (newspaper !== 'El País' && newspaper !== 'El Mundo')
    ) {
      return res.status(ResponseStatus.BadRequest).json({
        data: {
          message: 'NewsPaper type is invalid'
        }
      })
    }

    next()
  } catch (error) {
    return res.status(ResponseStatus.InternalServerError).json({
      data: {
        message: 'invalidNewspaperType() middleware'
      }
    })
  }
}
