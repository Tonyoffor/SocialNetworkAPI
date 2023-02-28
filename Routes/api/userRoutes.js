//Same concept as thought routes
const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  deleteFriend
  
} = require('../../controllers/userController.js');

// /api/user
router.route('/').get(getUsers).post(createUser);

// /api/user/:userId
router
  .route('/:userId')
  .get(getSingleUser)
  .delete(deleteUser)
  .put(updateUser);
  router.route("/:userId/friends/:friendId").put(addFriend)
  .delete(deleteFriend)

module.exports = router;
