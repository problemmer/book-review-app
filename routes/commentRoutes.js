const commentController = require("../controllers/commentController");
const router = require("express").Router();

router.post("/", commentController.create);
router.get("/:id", commentController.findOne);
router.put("/:id", commentController.update);
router.delete("/:id", commentController.delete);

module.exports = router;