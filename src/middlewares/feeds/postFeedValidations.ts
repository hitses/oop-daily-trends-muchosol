import { bodyNotFound } from '../bodyNotFound'
import { falsyBodyProperties } from '../falsyBodyProperties'
import { notObjectId } from '../notObjectId'
import { invalidNewspaperType } from '../invalidNewspaperType'
import { paramsIdNotFound } from '../paramsIdNotFound'

export const postFeedValidations = [
  paramsIdNotFound,
  notObjectId,
  bodyNotFound,
  falsyBodyProperties,
  invalidNewspaperType
]
