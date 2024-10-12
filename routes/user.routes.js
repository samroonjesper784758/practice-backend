const express = require("express");
const {
  handleGetAllUser,
  handleCreateUser,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
} = require("../contollers/user.controllers");

const router = express.Router();

router.route("/").get(handleGetAllUser).post(handleCreateUser);
router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

module.exports = router;
