import { Router } from 'express'
import DeleteFeedController from '../controllers/feed/deleteFeed.controller'
import GetFeedController from '../controllers/feed/getFeed.controller'
import GetFeedsController from '../controllers/feed/getFeeds.controller'
import PatchFeedController from '../controllers/feed/patchFeed.controller'
import PostFeedController from '../controllers/feed/postFeed.controller'
import PostFeedsController from '../controllers/feed/postFeeds.controller'
import {
  deleteFeedValidations,
  getFeedValidations,
  patchFeedValidations,
  postFeedValidations
} from '../middlewares'

const router = Router()

router.delete(
  '/:id',
  deleteFeedValidations,
  new DeleteFeedController().deleteFeed
)
router.get('/:id', getFeedValidations, new GetFeedController().getFeed)
router.get('/', new GetFeedsController().getFeeds)
router.patch('/:id', patchFeedValidations, new PatchFeedController().patchFeed)
router.post('/new', postFeedValidations, new PostFeedController().postFeed)
router.post('/', new PostFeedsController().postFeeds)

export default router
