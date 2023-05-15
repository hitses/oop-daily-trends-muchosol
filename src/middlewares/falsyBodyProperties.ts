import { Request, Response, NextFunction } from 'express'
import { ResponseStatus } from '../interfaces/enums'

function hasFalsyProperty(obj: Record<string, any>) {
  return Object.values(obj).some(value => !value)
}

export const falsyBodyProperties = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (hasFalsyProperty(req.body)) {
      return res.status(ResponseStatus.BadRequest).json({
        data: {
          message: 'At least one property is falsy'
        }
      })
    }

    next()
  } catch (error) {
    return res.status(ResponseStatus.InternalServerError).json({
      data: {
        message: 'falsyBodyProperties() middleware'
      }
    })
  }
}
