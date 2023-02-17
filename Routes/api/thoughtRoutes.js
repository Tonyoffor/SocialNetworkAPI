const router = require('express').Router();
const {
  getthought,
  getSinglethought,
  createthought,
  deletethought,
} = require('../../controllers/thoughtController');

// /api/thought
router.route('/').get(getthought).post(createthought);

// /api/thought/:thoughtId
router.route('/:thoughtId').get(getSinglethought).delete(deletethought);


module.exports = router;
