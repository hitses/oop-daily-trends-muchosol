import { Router } from 'express'
import DeleteFeedController from '../controllers/feed/deleteFeed.controller'
import GetFeedController from '../controllers/feed/getFeed.controller'
import GetFeedsController from '../controllers/feed/getFeeds.controller'
import PatchFeedController from '../controllers/feed/patchFeed.controller'
import PostFeedController from '../controllers/feed/postFeed.controller'
import PostFeedsController from '../controllers/feed/postFeeds.controller'

const router = Router()

router.delete('/:id', new DeleteFeedController().deleteFeed)
router.get('/:id', new GetFeedController().getFeed)
router.get('/', new GetFeedsController().getFeeds)
router.patch('/:id', new PatchFeedController().patchFeed)
router.post('/new', new PostFeedController().postFeed)
router.post('/', new PostFeedsController().postFeeds)

export default router
