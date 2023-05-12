import { Router } from 'express'
import getFeedController from '../controllers/getFeed.controller'

const getFeed = new getFeedController()

// import {
//   createFeedValidations,
//   deleteFeedValidations,
//   getFeedValidations,
//   patchFeedValidations
// } from '../middlewares'

const router = Router()

// router.post('/', createFeeds)
// router.post('/new', createFeedValidations, createFeed)
router.get('/', getFeed.getFeed)
// router.get('/:id', getFeedValidations, getFeed)
// router.patch('/:id', patchFeedValidations, patchFeed)
// router.delete('/:id', deleteFeedValidations, deleteFeed)

export default router
