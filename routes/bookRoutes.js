const bookController = require('../controllers/bookController');
const router = require('express').Router();

router.post('/', bookController.create);
router.get('/', bookController.findAll);
router.get('/:id', bookController.findOne);
router.put('/:id', bookController.update);
router.delete('/:id', bookController.delete);

module.exports = router;