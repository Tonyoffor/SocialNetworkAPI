const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  deleteThought,
  addReaction,
  deleteReaction,
 
} = require('../../controllers/thoughtController');

// /api/thought
router.route('/').get(getThought).post(createThought);

// /api/thought/:thoughtId
router
.route('/:thoughtId')
.get(getSingleThought)
.delete(deleteThought)
router.route("/:thoughtId/reaction/:reactionBody").put(addReaction)
.delete(deleteReaction)

module.exports = router;
