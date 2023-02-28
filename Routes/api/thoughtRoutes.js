//first you require express
const router = require('express').Router();
//so in the controllers we have the instructions of that to do and where the find the information to do the specific action
//here we require/ import the information from the action using the routers from line 16 to 24 below
const {
  getThought,
  getSingleThought,
  createThought,
  deleteThought,
  addReaction,
  deleteReaction,
 
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThought).post(createThought);

// /api/thoughts/:thoughtId
router
.route('/:thoughtId')
.get(getSingleThought)
.delete(deleteThought)
router.route("/:thoughtId/reaction/:reactionBody").put(addReaction)
.delete(deleteReaction)

module.exports = router;
