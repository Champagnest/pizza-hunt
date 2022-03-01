const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controller');

module.exports = router;
router.route('/:pizzaId').post(addComment);
router.route('/:pizzaId/:commentId').delete(removeComment);